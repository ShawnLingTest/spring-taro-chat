import { View } from "@tarojs/components";
import { FC } from "react";
import classNames from "classnames";
import { ViewProps } from "@tarojs/components/types/View";

export interface BadgeProps extends ViewProps {
  /**
   * 角标红点
   * @default false
   */
  dot?: boolean;
  /**
   * 角标内容
   */
  value?: string | number;
  /**
   * 角标最大值
   * @default 99
   */
  maxValue?: number;
}

const Badge: FC<BadgeProps> = ({
  dot = false,
  value,
  maxValue = 99,
  children,
  className,
  ...others
}) => {
  return (
    <View className={classNames(["badge-container", className])} {...others}>
      {children}
      {dot ? <DotView /> : <DotValue value={value} maxValue={maxValue} />}
    </View>
  );
};

const DotView: FC = () => {
  return <View className="badge-container__dot" />;
};

const formatValue = (value, maxValue) => {
  return value;
};

const DotValue: FC<{ value?: number | string; maxValue: number }> = ({
  value,
  maxValue,
}) => {
  if (!value) {
    return null;
  }
  return (
    <View className="badge-container__num">{formatValue(value, maxValue)}</View>
  );
};

export default Badge;
