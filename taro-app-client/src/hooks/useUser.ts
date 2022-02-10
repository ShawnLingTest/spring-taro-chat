import { useContext } from "react";
import userContext from "../components/UserCentext/userCentext";

export function useUser() {
  return useContext(userContext);
}
