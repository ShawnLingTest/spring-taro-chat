import { ScrollView } from "@tarojs/components";
import { useEffect, useState } from "react";
import { useUserCurrent } from "../../hooks/useUserCurrent";
import { useSystemInfo } from "../../hooks/useSystemInfo";
import UserInfoPane from "./components/UserInfoPane";
import { useNavigation } from "../../hooks/useNavigation";
import ToolBarPane from "./components/ToolBarPane";

const Me = () => {
  const [refresherTriggered, setRefresherTriggered] = useState(false);

  const { navigateTo } = useNavigation();
  const { windowHeight } = useSystemInfo();
  const { user, onLoadUser } = useUserCurrent();

  const onRefresherRefresh = () => {
    setRefresherTriggered(true);
    setTimeout(() => {
      onLoadUser(() => {
        setRefresherTriggered(false);
      });
    }, 1000);
  };

  useEffect(() => {
    onLoadUser();
  }, []);

  const onClickUserPane = () => {
    if (user.id) {
      navigateTo({
        url: "/pages/myProfile/index",
      });
    } else {
      navigateTo({
        url: "/pages/login/index",
      });
    }
  };

  return (
    <ScrollView
      scrollY
      refresherEnabled
      refresherTriggered={refresherTriggered}
      onRefresherRefresh={onRefresherRefresh}
      style={{
        height: windowHeight,
        background: "#eee",
      }}
    >
      <UserInfoPane
        user={{
          id: `${user.id}`,
          avatar: user.avatarUrl,
          name: user.nickname,
        }}
        onClick={onClickUserPane}
      />
      <ToolBarPane />
    </ScrollView>
  );
};

export default Me;
