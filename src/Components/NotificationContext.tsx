import { createContext, useContext } from "react";

import { User } from "../App";

export const UserContext = createContext<User | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export function useUserContext() {
  const details = useContext(UserContext);

  if (details === undefined) {
    throw new Error("useUserContextmust be used with UserContext");
  }

  return details;
}
