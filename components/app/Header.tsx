import useAuth from "@/hooks/useAuth";
import { Avatar, AvatarBadge, Flex, Text } from "@chakra-ui/react";

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
