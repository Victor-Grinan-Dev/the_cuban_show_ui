import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { useSelector } from "react-redux";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ Children }) {
  const currentUser = useSelector((state) => state.app.auth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      const unsubscribe = auth.onAuthStateChange((user) => {
        console.log(currentUser);
        setIsLoading(false);
      });
      return unsubscribe;
    }
  }, []);

  const value = {
    currentUser,
  };

  return <AuthContext.Provider value={value}>{Children}</AuthContext.Provider>;
}
