import { View, Text } from "@tarojs/components";
import { FC } from "react";
import Icon, { IconProps } from "../../../components/Icon";
import styles from "./ToolBarPane.module.scss";

const ToolBarPane: FC = () => {
  return (
    <View className={styles.container}>
      <ToolBarItem title="支付" icon={{ value: "" }} onClick={() => {}} />
      <ToolSpacing />
      <ToolBarItem title="我的收藏" icon={{ value: "" }} onClick={() => {}} />
      <ToolBarItem title="我的时刻" icon={{ value: "" }} onClick={() => {}} />
      <ToolSpacing />
      <ToolBarItem title="设置" icon={{ value: "" }} onClick={() => {}} />
    </View>
  );
};

interface ToolBarItemProps {
  title: string;
  icon: IconProps;
  onClick: () => void;
}

const ToolBarItem: FC<ToolBarItemProps> = ({ title, icon, onClick }) => {
  return (
    <View className={styles.toolContainer} onClick={onClick}>
      <View className={styles.toolIconContainer}>
        <Icon {...icon} />
      </View>
      <View className={styles.toolTitleContainer}>
        <Text>{title}</Text>
        <Icon value="chevron-right" />
      </View>
    </View>
  );
};

const ToolSpacing = () => {
  return <View className={styles.toolSpacing} />;
};

export default ToolBarPane;
