import { ScrollView, Text } from "@tarojs/components";
import { useSystemInfo } from "../../hooks/useSystemInfo";
import UserInfoPane from "./components/UserInfoPane";

const Me = () => {
  const { windowHeight } = useSystemInfo();
  return (
    <ScrollView
      scrollY
      style={{
        height: windowHeight,
      }}
    >
      <UserInfoPane />
    </ScrollView>
  );
};

export default Me;
