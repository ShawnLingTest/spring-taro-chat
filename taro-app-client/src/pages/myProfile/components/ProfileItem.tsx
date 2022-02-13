import Avatar, { AvatarProps } from "@/components/Avatar";
import Icon from "@/components/Icon";
import { View, Text } from "@tarojs/components";
import { FC } from "react";
import styles from "./ProfileItem.module.scss";

export interface ProfileItemProps {
  title: string;
  onClick?: () => void;
  detail?: string;
  avatar?: AvatarProps;
}

const ProfileItem: FC<ProfileItemProps> = ({
  title,
  detail,
  avatar,
  onClick,
}) => {
  return (
    <View className={styles.container} onClick={onClick}>
      <View className={`${avatar ? styles.avatarContent : ""}`}>
        <Text>{title}</Text>
        <View className={styles.rightContainer}>
          {avatar ? <Avatar {...avatar} /> : <Text>{detail}</Text>}
          {onClick && <Icon value="chevron-right" />}
        </View>
      </View>
    </View>
  );
};

export default ProfileItem;
