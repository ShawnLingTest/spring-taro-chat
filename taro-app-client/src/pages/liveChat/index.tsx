import { ScrollView, View } from "@tarojs/components";
import MessageList from "./components/MessageList";
import FooterBar from "./components/FooterBar";
import styles from "./index.module.scss";
import { useSystemInfo } from "../../hooks/useSystemInfo";
import { useChatMessage } from "../../hooks/useChatMessage";

const LiveChat = () => {
  const { windowHeight, safeBottomHeight } = useSystemInfo();
  const { loading, chatMessages } = useChatMessage();
  return (
    <View style={styles.container}>
      <MessageList height={windowHeight} messages={chatMessages} />
      <FooterBar onSendMsg={() => {}} safeHeight={safeBottomHeight} />
    </View>
  );
};

export default LiveChat;
