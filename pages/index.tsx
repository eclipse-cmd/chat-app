import useAuth from "@/hooks/useAuth";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { auth, user, loading } = useAuth();

  console.log("Auth: ", auth);
  console.log("User: ", user);
  console.log("Loader: ", loading);

  return (
    <>
      <h4>home page</h4>
    </>
  );
};

export default Home;
