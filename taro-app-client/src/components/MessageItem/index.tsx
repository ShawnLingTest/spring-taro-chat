import { View, Text } from "@tarojs/components";
import { ViewProps } from "@tarojs/components/types/View";
import classNames from "classnames";
import { FC } from "react";
import Avatar from "../Avatar";
import Badge from "../Badge";
import Icon from "../Icon";

export interface MessageItemProps extends ViewProps {
  user: {
    avatar: string;
    name: string;
  };
  message: {
    content: string;
    lastTime: string;
  };
  // 0 =点， 大于0 数字显示， 小于0 不显示
  badge: number;
}

const MessageItem: FC<MessageItemProps> = ({
  user,
  message,
  badge,
  className,
  ...others
}) => {
  const base = "message-item";
  return (
    <View
      className={classNames([`${base}-container`, className])}
      hoverClass={`${base}-container-hover`}
      {...others}
    >
      <Badge value={2}>
        <Avatar image={user.avatar} />
      </Badge>
      <View className={`${base}-content-container`}>
        <View>
          <Text>{user.name}</Text>
          <Text className={`${base}-content-container__lastTime`}>
            {message.lastTime}
          </Text>
        </View>
        <View>
          <Text className={`${base}-content-container__content`}>
            {message.content}
          </Text>
          <Icon value="" />
        </View>
      </View>
    </View>
  );
};

export default MessageItem;
