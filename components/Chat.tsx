import useAuth from "@/hooks/useAuth";
import { uuid } from "@/services/helper/uuid";
import { Message, User } from "@/services/types";
import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Divider from "./app/Divider";
import Footer from "./app/Footer";
import Header from "./app/Header";
import Messages from "./app/Messages";

interface ChatProps {}

const Chat: React.FC<ChatProps> = ({}) => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Array<Message>>([
    {
      id: uuid(),
      text: "Myself Ferin Patel",
      created_at: Date.now(),
      from: {
        id: "5496",
        firstname: "emma",
        lastname: "toba",
      },
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim().length) {
      return;
    }
    const data = inputMessage;

    setMessages((old) => [
      ...old,
      {
        id: uuid(),
        text: data,
        created_at: Date.now(),
        from: user as User,
      },
    ]);
    setInputMessage("");

    setTimeout(() => {
      setMessages((old) => [
        ...old,
        {
          id: uuid(),
          text: data,
          created_at: Date.now(),
          from: {
            id: uuid(),
            firstname: "emma",
            lastname: "toba",
          },
        },
      ]);
    }, 1000);
  };

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
