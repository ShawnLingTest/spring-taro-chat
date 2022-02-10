import * as Taro from "@tarojs/taro";

export function useNavigation() {
  const navigateTo = (option: Taro.navigateTo.Option) => {
    Taro.navigateTo(option);
  };

  const navigateBack = (option?: Taro.navigateBack.Option) => {
    Taro.navigateBack(option);
  };

  return {
    navigateTo,
    navigateBack,
  };
}
