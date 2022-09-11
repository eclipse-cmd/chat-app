import React, { useEffect, useRef } from "react";
import { Avatar, Flex, Text } from "@chakra-ui/react";
import { Message } from "@/services/types";
import useAuth from "@/hooks/useAuth";

interface MessagesProps {
  messages: Array<Message>;
}

const Messages: React.FC<MessagesProps> = ({ messages }) => {
  const { user } = useAuth();

  const AlwaysScrollToBottom = () => {
    const elementRef = useRef(null);

    // useEffect(() => elementRef.current);

    return <div ref={elementRef} />;
  };

  return (
    <Flex w="100%" h="80%" overflowY="scroll" flexDirection="column" p="3">
      {messages.map((item, index) => {
        if (item.from.id === user?.id) {
          return (
            <Flex key={index} w="100%" justify="flex-end">
              <Flex
                bg="black"
                color="white"
                minW="100px"
                maxW="350px"
                borderRadius={5}
                my="1"
                p="3">
                <Text>{item.text}</Text>
              </Flex>
            </Flex>
          );
        } else {
          return (
            <Flex key={index} w="100%">
              <Avatar
                name={`${item.from.firstname} ${item.from.lastname}`}
                bg="teal.600"
                mr={2}
              />
              <Flex
                bg="gray.100"
                color="black"
                borderRadius={5}
                minW="100px"
                maxW="350px"
                my="1"
                p="3">
                <Text>{item.text}</Text>
              </Flex>
            </Flex>
          );
        }
      })}

      <AlwaysScrollToBottom />
    </Flex>
  );
};

export default Messages;
