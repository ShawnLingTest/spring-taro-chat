import { ScrollView, View } from "@tarojs/components";
import { FC } from "react";
import ActivityIndicator from "../../../components/ActivityIndicator";
import MessageItem, { MessageItemProps } from "./MessageItem";
import styles from "./MessageList.module.scss";

export interface MessageListProps {
  height: number;
  messages: MessageItemProps[];
}
const MessageList: FC<MessageListProps> = ({ height, messages }) => {
  return (
    <ScrollView className={styles.container} scrollY style={{ height }}>
      <Topblock loading />
      {messages.map((item, index) => {
        return <MessageItem key={index} {...item} />;
      })}
    </ScrollView>
  );
};

const Topblock: FC<{ loading: boolean }> = ({ loading }) => {
  if (loading) {
    return (
      <View>
        <ActivityIndicator
          isOpened={loading}
          size={28}
          mode="center"
          color="#ccc"
        />
      </View>
    );
  }
  return <View className="top-block" />;
};

export default MessageList;
