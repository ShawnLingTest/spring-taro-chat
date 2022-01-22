import { FC } from "react";
import { Textarea, View } from "@tarojs/components";
import styles from "./FooterBar.module.scss";

interface FooterBarProps {
  onSendMsg: (msg: string) => void;
}
const FooterBar: FC<FooterBarProps> = () => {
  const onClickSendMsg = () => {};

  return (
    <View
      className={styles.container}
      style={{
        paddingBottom: 50,
      }}
    >
      <View className={styles.innerContainer}>
        <View className={styles.inputContainer}>
          <Textarea placeholder="请输入发送内容" autoHeight />
        </View>
        <View className={styles.sendMsgButton} onClick={onClickSendMsg}>
          发送
        </View>
      </View>
    </View>
  );
};

export default FooterBar;
