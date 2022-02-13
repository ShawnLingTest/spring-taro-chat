import { View, Text, Image } from "@tarojs/components";
import { FC } from "react";
import Icon from "../../../components/Icon";
import styles from "./UserInfoPane.module.scss";

export interface UserInfoPaneProps {
  user: {
    avatar: string;
    name: string;
    id: string;
  } | null;
  onClick: () => void;
}

const UserInfoPane: FC<UserInfoPaneProps> = ({ user, onClick }) => {
  return (
    <View className={styles.container} onClick={onClick}>
      <View className={styles.avatar}>
        <Image src={user?.avatar || ""} />
      </View>
      {user ? (
        <View className={styles.nameContainer}>
          <Text>{user?.name || "----"}</Text>
          <Text>ID: {user?.id || "----"}</Text>
        </View>
      ) : (
        <View className={styles.tipContainer}>
          <Text>立即登录</Text>
        </View>
      )}
      <View className={styles.rightContainer}>
        <Icon value="chevron-right" />
      </View>
    </View>
  );
};

export default UserInfoPane;
