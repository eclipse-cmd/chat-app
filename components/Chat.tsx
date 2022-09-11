import { useAppDispatch, useAppSelector } from "@/hooks";
import useAuth from "@/hooks/useAuth";
import { uuid } from "@/services/helper";
import { Message, User } from "@/services/types";
import {
  saveMessage,
  selectMessages,
  getMessages,
} from "@/store/features/messages";
import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Divider from "./app/Divider";
import Footer from "./app/Footer";
import Header from "./app/Header";
import Messages from "./app/Messages";

const Chat: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const { user } = useAuth();
  const [messages, _] = useState<Array<Message>>(
    useAppSelector(selectMessages)
  );

  const [inputMessage, setInputMessage] = useState("");

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

    dispatch(saveMessage(msg));

    setInputMessage("");

    // setTimeout(() => {
    //   setMessages((old) => [
    //     ...old,
    //     {
    //       id: uuid(),
    //       text: data,
    //       created_at: Date.now(),
    //       from: {
    //         id: uuid(),
    //         firstname: "emma",
    //         lastname: "toba",
    //       },
    //     },
    //   ]);
    // }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Poll the local storage for new data.
      dispatch(getMessages());
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <Flex w="100%" h="100vh" justify="center" align="center">
      <Flex w={["100%", "100%", "40%"]} h="90%" flexDir="column">
        <Header />
        <Divider />
        <Messages messages={messages} />
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
