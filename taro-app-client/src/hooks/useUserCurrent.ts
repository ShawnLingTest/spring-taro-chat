import { getCurrent } from "../service/apis/account";
import { useUser } from "./useUser";

export function useUserCurrent() {
  const { user, setUser } = useUser();

  const onLoadUser = (callback?: (error?: any) => void) => {
    getCurrent()
      .then(({ data }) => {
        setUser(data);
        callback && callback();
      })
      .catch((e) => {
        callback && callback(e);
      });
  };

  return {
    user,
    onLoadUser,
  };
}
