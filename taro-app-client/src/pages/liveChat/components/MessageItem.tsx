import { FC } from "react";
import { View, Text } from "@tarojs/components";
import Avatar from "../../../components/Avatar";
import MessageComponent from "../../../components/Message";
import { MessageComponentTypes } from "../../../components/Message/config";
import styles from "./MessageItem.module.scss";

export interface MessageItemProps {
  reverse?: boolean;
  message: MessageComponentTypes;
  user: {
    avatar: string;
    nickname: string;
  };
}
const MessageItem: FC<MessageItemProps> = ({ reverse, message, user }) => {
  return (
    <View className={`${styles.container} ${reverse ? styles.reverse : ""}`}>
      <View className={styles.avatar}>
        <Avatar size="normal" circle image={user.avatar} />
      </View>
      <View className={styles.contentView}>
        <Text>{user.nickname}</Text>
        <MessageComponent {...message} />
      </View>
    </View>
  );
};

export default MessageItem;
