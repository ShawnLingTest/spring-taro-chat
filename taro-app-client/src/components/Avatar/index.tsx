import { Image, View } from "@tarojs/components";
import { ImageProps } from "@tarojs/components/types/Image";
import { FC } from "react";
import classNames from "classnames";

export interface AvatarProps extends Omit<ImageProps, "src"> {
  image: string;
  circle?: boolean;
  size?: "md" | "lg" | "sm" | number;
}
const Avatar: FC<AvatarProps> = ({
  image,
  size = "md",
  circle = false,
  className,
  ...others
}) => {
  return (
    <View className={classNames(["avatar-container", className])}>
      <Image
        className={classNames({
          [`avatar-${size}`]: typeof size === "string",
          "avatar-circle": circle,
        })}
        src={image}
        style={{
          ...getSizeStyle(size),
        }}
        {...others}
      />
    </View>
  );
};

const getSizeStyle = (size: AvatarProps["size"]) => {
  if (typeof size === "number" && size > 0) {
    return {
      width: size,
      height: size,
    };
  }
  return {};
};

export default Avatar;
