import { isServer } from "@/services/helper/isServer";
import { User } from "@/services/types";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [auth, setAuth] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setLoading(true);

    const data = sessionStorage.getItem("chat-app-user");

    if (data) {
      setUser(JSON.parse(data));
      setAuth(true);
    }

    setTimeout(() => setLoading(false), 2000);
  }, []);

  return { auth, user, loading };
};

export default useAuth;
