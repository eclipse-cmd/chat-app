import React from "react";
import { Flex, Avatar, AvatarBadge, Text } from "@chakra-ui/react";
import useAuth from "@/hooks/useAuth";

const Header = () => {
  const { user } = useAuth();

  return (
    <Flex w="100%">
      <Avatar size="lg" name={`${user?.firstname} ${user?.lastname}`}>
        <AvatarBadge boxSize="1.25em" bg="blue.500" />
      </Avatar>
      <Flex flexDirection="column" mx="5" justify="center">
        <Text fontSize="lg" fontWeight="bold">
          {`${user?.firstname} ${user?.lastname}`}
        </Text>
        <Text color="green.500">Online</Text>
      </Flex>
    </Flex>
  );
};

export default Header;
