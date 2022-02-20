import MessageItem from "@/components/MessageItem";
import VirtualList from "@tarojs/components/virtual-list";
import { View } from "@tarojs/components";
import { FC, memo, useRef } from "react";
import { useNavigation } from "@/hooks/useNavigation";

export interface MessageListProps {
  height: number;
  list: API.Message.MessageListItem[];
  onScrollReached: () => void;
}

const ITEM_SIZE = 62;

const MessageRow = memo<{
  id: any;
  style: any;
  data: MessageListProps["list"];
  index: number;
}>(({ id, style, data, index }) => {
  const { navigateTo } = useNavigation();
  const item = data[index];
  return (
    <View id={id} style={style}>
      <MessageItem
        onClick={() => {
          navigateTo({
            url: "/pages/liveChat/index",
          });
        }}
        user={{
          avatar: item.avatarUrl,
          name: item.nickname,
        }}
        message={{
          content: item.lastContent,
          lastTime: item.lastTime,
        }}
        badge={0}
        style={{
          height: ITEM_SIZE,
        }}
      />
    </View>
  );
});

const MessageList: FC<MessageListProps> = ({
  height,
  list,
  onScrollReached,
}) => {
  const virtualRef = useRef(null);
  return (
    <VirtualList
      ref={virtualRef}
      itemCount={list.length}
      itemData={list}
      itemSize={ITEM_SIZE}
      height={height}
      width="100%"
      onScroll={({ scrollDirection, scrollOffset }) => {
        if (
          // 只有往前滚动我们才触发
          scrollDirection === "forward" &&
          // 5 = (列表高度 / 单项列表高度)
          // 100 = 滚动提前加载量，可根据样式情况调整
          scrollOffset > (list.length - 17) * ITEM_SIZE + 200
        ) {
          onScrollReached();
        }
      }}
    >
      {MessageRow}
    </VirtualList>
  );
};

export default MessageList;
