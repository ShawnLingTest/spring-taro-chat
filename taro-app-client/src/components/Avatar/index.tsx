import { Image, View } from "@tarojs/components";
import { FC } from "react";

const SIZE = 42;

export interface AvatarProps {
  image: string;
}
const Avatar: FC<AvatarProps> = ({ image }) => {
  return (
    <View>
      <Image
        src={image}
        style={{
          width: SIZE,
          height: SIZE,
          background: "#eee",
          borderRadius: SIZE / 2,
        }}
      />
    </View>
  );
};

export default Avatar;
