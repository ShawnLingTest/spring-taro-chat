import { View, Text, Image } from "@tarojs/components";
import styles from "./UserInfoPane.module.scss";

const UserInfoPane = () => {
  return (
    <View className={styles.container}>
      <View>
        <Image src="" />
      </View>
      <View>
        <Text>Ling</Text>
        <Text>ID: 2291293</Text>
      </View>
    </View>
  );
};

export default UserInfoPane;
