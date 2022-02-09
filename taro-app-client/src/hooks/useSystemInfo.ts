import { getSystemInfoSync } from "@tarojs/taro";

export function useSystemInfo() {
  const { safeArea, screenHeight, ...args } = getSystemInfoSync();
  return {
    safeBottomHeight: screenHeight - safeArea.bottom,
    screenHeight,
    safeArea,
    ...args,
  };
}
