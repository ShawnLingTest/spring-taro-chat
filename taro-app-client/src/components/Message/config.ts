import TextMessage, { TextMessageProps } from "./TextMessage";
import ImageMessage, { ImageMessageProps } from "./ImageMessage";

export const messageComponents = {
  text: TextMessage,
  image: ImageMessage,
};

export type MessageTypes = keyof typeof messageComponents;

// 组件类型
export type ComponentType<T extends MessageTypes, P> = {
  type: T;
} & P;

// 组件联合类型
export type MessageComponentTypes =
  | ComponentType<"text", TextMessageProps>
  | ComponentType<"image", ImageMessageProps>;
