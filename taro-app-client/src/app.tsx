import { FC } from "react";
import UserContext from "./components/UserCentext";
import "./app.scss";

const App: FC = ({ children }) => {
  return <UserContext>{children}</UserContext>;
};

export default App;
