import { useAppSelector } from "@/hooks";
import useAuth from "@/hooks/useAuth";
import { Message } from "@/services/types";
import { selectMessages } from "@/store/features/messages";
import { Avatar, Button, Center, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";

interface MessagesProps {
  messages: Array<Message>;
  loading: boolean;
  loadMore: () => void;
}

const Messages: React.FC<MessagesProps> = ({ messages, loading, loadMore }) => {
  const { user } = useAuth();
  const messageData = useAppSelector(selectMessages);

  return (
    <>
      {loading ? (
        <>
          <Flex w="100%" h="80%" flexDirection="column" p="3">
            <Center>Loading messages</Center>
          </Flex>
        </>
      ) : messages.length > 0 ? (
        <Flex w="100%" h="80%" overflowY="scroll" flexDirection="column" p="3">
          {!loading &&
          messageData.value.length > 25 &&
          messageData.value.length != messages.length ? (
            <HStack>
              <Center width="100%" my={5}>
                <Button onClick={() => loadMore()} size="sm">
                  Load more
                </Button>
              </Center>
            </HStack>
          ) : null}
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
        </Flex>
      ) : (
        <Flex w="100%" h="80%" flexDirection="column" p="3">
          <Center>No messages here yet</Center>
        </Flex>
      )}
    </>
  );
};

export default Messages;
