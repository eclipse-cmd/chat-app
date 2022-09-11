import { User } from "@/services/types";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [auth, setAuth] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setLoading(true);

    const data = localStorage.getItem("chat-app-user");

    if (data) {
      setUser(JSON.parse(data));
      setAuth(true);
    }

    setTimeout(() => setLoading(false), 1500);
  }, []);

  return { auth, user, loading };
};

export default useAuth;
