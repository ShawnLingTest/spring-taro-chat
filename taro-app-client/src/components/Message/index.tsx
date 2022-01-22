import { View } from "@tarojs/components";
import { FC } from "react";
import { messageComponents, MessageComponentTypes } from "./config";

// Component
const MessageComponent: FC<MessageComponentTypes> = (props) => {
  const Element: any = messageComponents[props.type] || View;
  return (
    <View className="chat-msg-container">
      <Element {...props} />
    </View>
  );
};

export default MessageComponent;
