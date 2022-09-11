import Chat from "@/components/Chat";
import useAuth from "@/hooks/useAuth";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { auth, user, loading } = useAuth();

  console.log("Auth: ", auth);
  console.log("User: ", user);
  console.log("Loading: ", loading);

  return <Chat />;
};

export default Home;
