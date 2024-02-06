import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { User } from "firebase/auth";

export function useAuth() {
  const [user, setUser] = useState({} as User);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    auth.onAuthStateChanged(function handleAuth(user) {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser({} as User);
        setLoading(false);
      }
    });
  }, []);

  return { user, loading };
}
