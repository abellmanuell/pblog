import { createContext } from "react";

export const UserLoggedInContext = createContext(
  Boolean(localStorage.getItem("token"))
);
