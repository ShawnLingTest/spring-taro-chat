import { FC, useMemo, useState } from "react";
import { UserProvidder, UserContextType } from "./userCentext";

const UserContext: FC = ({ children }) => {
  const [user, setUser] = useState<UserContextType["user"]>({
    id: 0,
    avatarUrl: "",
    nickname: "",
  });

  const value = useMemo<UserContextType>(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  return <UserProvidder value={value}>{children}</UserProvidder>;
};

export default UserContext;
