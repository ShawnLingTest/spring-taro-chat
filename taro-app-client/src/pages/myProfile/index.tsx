import { useSystemInfo } from "@/hooks/useSystemInfo";
import { useUser } from "@/hooks/useUser";
import { ScrollView } from "@tarojs/components";
import ProfileItem from "./components/ProfileItem";
import styles from "./index.module.scss";

const MyProfile = () => {
  const { user } = useUser();
  const { windowHeight } = useSystemInfo();
  return (
    <ScrollView
      className={styles.container}
      scrollY
      style={{ height: windowHeight }}
    >
      <ProfileItem
        title="我的头像"
        avatar={{
          image: user.avatarUrl,
        }}
        onClick={() => {}}
      />
      <ProfileItem title="名称" detail={user.nickname || "----"} />
      <ProfileItem title="ID编号" detail={`${user.id}`} />
      <ProfileItem title="我的二维码" />
    </ScrollView>
  );
};

export default MyProfile;
