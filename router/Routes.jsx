import { useContext } from "react";
import { UserLoggedInContext } from "../src/context/UserLoggedInContext";
import { useState } from "react";

export default function Routes({ children }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(
    Boolean(localStorage.getItem("token"))
  );
  return (
    <UserLoggedInContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
      {children}
    </UserLoggedInContext.Provider>
  );
}
