import { useMessageList } from "@/hooks/useMessageList";
import { useNavigation } from "@/hooks/useNavigation";
import { ScrollView, View } from "@tarojs/components";
import { useSystemInfo } from "../../hooks/useSystemInfo";
import MessageList from "./components/MessageList";
import styles from "./index.module.scss";

const Message = () => {
  const { windowHeight } = useSystemInfo();
  const { navigateTo } = useNavigation();
  const { messageList, onEndReached: bindEndReached } = useMessageList();

  return (
    <View className={styles.container}>
      <MessageList
        height={windowHeight}
        list={messageList}
        onScrollReached={bindEndReached}
      />
    </View>
  );
};

export default Message;
