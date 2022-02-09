import { FC, useState } from "react";
import { CommonEventFunction, Image, Textarea, View } from "@tarojs/components";
import styles from "./FooterBar.module.scss";
import Icon, { IconProps } from "../../../components/Icon";
import { TextareaProps } from "@tarojs/components/types/Textarea";

type MsgType = {
  value: string;
  type: "image" | "text";
};

interface FooterBarProps {
  safeHeight: number;
  onSendMsg: (msg: MsgType) => void;
}
const FooterBar: FC<FooterBarProps> = ({ safeHeight, onSendMsg }) => {
  const [inputValue, setInputValue] = useState("");

  const [keywordHeight, setKeywordHeight] = useState(0);

  const onClickSendMsg = () => {
    if (inputValue) {
      onSendMsg({
        type: "text",
        value: inputValue,
      });
    }
  };

  const onFocus: CommonEventFunction<TextareaProps.onFocusEventDetail> = ({
    detail,
  }) => {
    setKeywordHeight(detail.height);
  };

  const onBlur: CommonEventFunction<TextareaProps.onBlurEventDetail> = () => {
    setKeywordHeight(0);
  };

  const onConfirm: CommonEventFunction<TextareaProps.onConfirmEventDetail> = ({
    detail,
  }) => {};

  const onKeyboardHeightChange = () => {};

  return (
    <View
      className={styles.container}
      style={{
        // bottom: keywordHeight,
        paddingBottom: keywordHeight === 0 ? safeHeight : 0,
      }}
    >
      <View className={styles.innerContainer}>
        <View className={styles.inputContainer}>
          <Textarea
            autoHeight
            holdKeyboard
            showConfirmBar={false}
            // adjustPosition={false}
            value={inputValue}
            onInput={({ detail }) => {
              setInputValue(detail.value);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            onConfirm={onConfirm}
            onKeyboardHeightChange={onKeyboardHeightChange}
            // @ts-ignore
            confirmType="send"
          />
        </View>
      </View>
      <ToolBar
        tools={[
          {
            icon: {
              value: "image",
            },
            onClick: () => {},
          },
          {
            icon: {
              value: "camera",
            },
          },
        ]}
      />
    </View>
  );
};

interface ToolBarProps {
  tools: {
    icon: IconProps;
    onClick?: () => void;
  }[];
}
const ToolBar: FC<ToolBarProps> = ({ tools }) => {
  // 创建5个tool 保持一行5个宽度比
  const toolBarList = new Array(5).fill({});
  tools.forEach((tool, index) => {
    toolBarList[index] = tool;
  });
  return (
    <View className={styles.toolContainer}>
      {toolBarList.map((item, index) => {
        return (
          <View key={index} onClick={item.onClick}>
            <Icon {...item.icon} />
          </View>
        );
      })}
    </View>
  );
};
export default FooterBar;
