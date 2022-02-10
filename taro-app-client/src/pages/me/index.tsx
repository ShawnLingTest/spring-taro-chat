import { ScrollView } from "@tarojs/components";
import { useEffect, useState } from "react";
import { useUserCurrent } from "../../hooks/useUserCurrent";
import { useSystemInfo } from "../../hooks/useSystemInfo";
import UserInfoPane from "./components/UserInfoPane";

const Me = () => {
  const [refresherTriggered, setRefresherTriggered] = useState(false);

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
        onToLogin={() => {}}
      />
    </ScrollView>
  );
};

export default Me;
