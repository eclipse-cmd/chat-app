import { getSession } from "@/services/helper/session";
import { User } from "@/services/types";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [auth, setAuth] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setLoading(true);

    const data = getSession();

    if (data) {
      setUser(data);

      setAuth(true);
    }

    setTimeout(() => setLoading(false), 1000);
  }, []);

  return { auth, user, loading };
};

export default useAuth;
