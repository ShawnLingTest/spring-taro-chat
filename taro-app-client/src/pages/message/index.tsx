import { ScrollView, View } from "@tarojs/components";
import { useSystemInfo } from "../../hooks/useSystemInfo";
import styles from "./index.module.scss";

const Message = () => {
  const { windowHeight } = useSystemInfo();

  return (
    <ScrollView
      className={styles.container}
      scrollY
      style={{ height: windowHeight }}
    ></ScrollView>
  );
};

export default Message;
