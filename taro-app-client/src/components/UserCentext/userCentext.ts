import { createContext } from "react";

export type UserContextType = {
  user: API.Account.CurrentResult;
  setUser: (user: UserContextType["user"]) => void;
};

const userContext = createContext<UserContextType>({
  user: {
    id: 0,
    avatarUrl: "",
    nickname: "",
  },
  setUser: () => {},
});

export const UserProvidder = userContext.Provider;

export default userContext;
