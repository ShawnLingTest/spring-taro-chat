import { View, Text, Image } from "@tarojs/components";
import { FC } from "react";
import styles from "./UserInfoPane.module.scss";

export interface UserInfoPaneProps {
  user: {
    avatar: string;
    name: string;
    id: string;
  } | null;
  onToLogin: () => void;
}

const UserInfoPane: FC<UserInfoPaneProps> = ({ user, onToLogin }) => {
  return (
    <View className={styles.container}>
      <View className={styles.avatar}>
        <Image src={user?.avatar || ""} />
      </View>
      <View className={styles.nameContainer}>
        <Text>{user?.name || "----"}</Text>
        <Text>ID: {user?.id || "----"}</Text>
      </View>
    </View>
  );
};

export default UserInfoPane;
