import { createContext } from "react";

export const UserLoggedInContext = createContext(
  Boolean(localStorage.getItem("token"))
);

export const UserContext = createContext(null);
