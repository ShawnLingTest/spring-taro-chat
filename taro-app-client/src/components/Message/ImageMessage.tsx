import { FC, useState } from "react";
import { CommonEventFunction, View, Image } from "@tarojs/components";
import { ImageProps } from "@tarojs/components/types/Image";

export interface ImageMessageProps extends Omit<ImageProps, "src"> {
  image: string;
}

/**
 * 微信聊天图片大小生成算法
 * https://www.jianshu.com/p/773b87e3356b
 * @param w
 * @param h
 * @returns
 */
const trasnformSize = (w, h) => {
  //根据宽高比来设置外框的size
  const ratio = Number((w / h).toFixed(1));
  let width = 0;
  let height = 0;
  if (ratio < 0.4) {
    width = 204; //这是从微信截图的长度最后需要同一除以3
    height = 510;
  } else if (ratio >= 0.4 && ratio <= 0.5) {
    width = 204;
    height = 204 / ratio;
  } else if (ratio > 0.5 && ratio < 1) {
    width = 405 * ratio;
    height = 405;
  } else if (ratio >= 1 && ratio < 1 / 0.5) {
    //和前面的宽高转置
    height = 405 * (1 / ratio);
    width = 405;
  } else if (ratio >= 1 / 0.5 && ratio < 1 / 0.4) {
    height = 204;
    width = 204 / (1 / ratio);
  } else if (ratio >= 1 / 0.4) {
    height = 204; //这是从微信截图的长度最后需要同一除以3
    width = 510;
  }
  height /= 3;
  width /= 3;
  return {
    width,
    height,
  };
};

const ImageMessage: FC<ImageMessageProps> = ({ image, ...others }) => {
  const [size, setSize] = useState<{ width?: number; height?: number }>({});
  const onImageLoad: CommonEventFunction<ImageProps.onLoadEventDetail> = ({
    detail,
  }) => {
    const { width, height } = trasnformSize(detail.width, detail.height);
    setSize({
      width,
      height,
    });
  };
  return (
    <View className="chat-msg-container--image">
      <Image
        src={image}
        onLoad={onImageLoad}
        mode="widthFix"
        style={size}
        {...others}
      />
    </View>
  );
};

export default ImageMessage;
