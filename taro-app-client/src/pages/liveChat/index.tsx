import { ScrollView, View } from "@tarojs/components";
import MessageList from "./components/MessageList";
import FooterBar from "./components/FooterBar";
import { getSystemInfoSync } from "@tarojs/taro";
import styles from "./index.module.scss";

const LiveChat = () => {
  const { windowHeight } = getSystemInfoSync();
  const footerHeight = 50;
  return (
    <View style={styles.container}>
      <MessageList height={windowHeight} messages={[]} />
      <FooterBar onSendMsg={() => {}} />
    </View>
  );
};

export default LiveChat;
