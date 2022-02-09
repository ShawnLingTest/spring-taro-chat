import { Text } from "@tarojs/components";
import { FC } from "react";
import classNames from "classnames";

export interface IconProps {
  prefixClass?: string;
  className?: string;
  value: string;
}

const Icon: FC<IconProps> = ({
  prefixClass = "app-icon",
  className,
  value,
}) => {
  const iconName = value ? `${prefixClass}-${value}` : "";
  return <Text className={classNames(prefixClass, iconName, className)} />;
};

export default Icon;
