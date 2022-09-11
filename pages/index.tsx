import Chat from "@/components/Chat";
import useAuth from "@/hooks/useAuth";
import { Center, Spinner } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  const { auth, user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !auth) {
      router.push("/login");
    }
  }, [auth, loading, router]);

  return (
    <>
      {auth ? (
        <Chat />
      ) : (
        <Center minH="100vh">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      )}
    </>
  );
};

export default Home;
