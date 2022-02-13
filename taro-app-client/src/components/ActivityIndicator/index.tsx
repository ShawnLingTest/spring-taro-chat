import { View, Text } from "@tarojs/components";
import { FC } from "react";

export interface ActivityIndicatorProps {}

const ActivityIndicator: FC<ActivityIndicatorProps> = () => {
  return (
    <View>
      <Text>加载中...</Text>
    </View>
  );
};

export default ActivityIndicator;
