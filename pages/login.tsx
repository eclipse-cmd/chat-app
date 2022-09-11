import { isClient } from "@/services/helper/isClient";
import { setSession } from "@/services/helper/session";
import { uuid } from "@/services/helper/uuid";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [inputField, setInputField] = useState({});

  //Functions
  const inputsHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  //Save new user
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();

    if (isClient()) {
      setSession({
        ...inputField,
        id: uuid(),
      });
    }

    router.push("/");
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}>
      <form onSubmit={onSubmit}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to start chatting ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>First name</FormLabel>
                <Input name="firstname" onChange={inputsHandler} type="text" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Last name</FormLabel>
                <Input name="lastname" onChange={inputsHandler} type="text" />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  type="submit"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </form>
    </Flex>
  );
};

export default Login;
