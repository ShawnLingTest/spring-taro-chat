import { FC } from "react";
import { View, Text } from "@tarojs/components";

export interface TextMessageProps {
  content: string;
}

const TextMessage: FC<TextMessageProps> = ({ content }) => {
  return (
    <View className="chat-msg-container--text">
      <Text>{content}</Text>
    </View>
  );
};

export default TextMessage;
