import { useAppDispatch, useAppSelector } from "@/hooks";
import useAuth from "@/hooks/useAuth";
import { uuid } from "@/services/helper";
import { Message, User } from "@/services/types";
import {
  getMessages,
  saveMessage,
  selectMessages,
} from "@/store/features/messages";
import { Button, Center, Flex, HStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Divider from "./app/Divider";
import Footer from "./app/Footer";
import Header from "./app/Header";
import Messages from "./app/Messages";

const Chat: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const { user } = useAuth();
  const messageData = useAppSelector(selectMessages);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<Array<Message>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleSendMessage = () => {
    if (!inputMessage.trim().length) {
      return;
    }

    const data = inputMessage;

    const msg = {
      id: uuid(),
      text: data,
      created_at: Date.now(),
      from: user as User,
    };

    setMessages((old) => [...old, msg]);

    dispatch(saveMessage(msg));

    setInputMessage("");
  };

  const loadMore = () => {
    console.log("messages");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Poll the local storage for new data.
      dispatch(getMessages());

      //Set messages
      setMessages(messageData.value);

      setTimeout(() => setLoading(false), 1000);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch, messageData]);

  return (
    <Flex w="100%" h="100vh" justify="center" align="center">
      <Flex w={["100%", "100%", "40%"]} h="90%" flexDir="column">
        <Header />
        <Divider />
        {messages.length > 25 && (
          <HStack>
            <Center width="100%" my={5}>
              <Button onClick={() => loadMore()} size="sm">
                Load more
              </Button>
            </Center>
          </HStack>
        )}
        <Messages messages={messages} loading={loading} />
        <Divider />
        <Footer
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleSendMessage={handleSendMessage}
        />
      </Flex>
    </Flex>
  );
};

export default Chat;
