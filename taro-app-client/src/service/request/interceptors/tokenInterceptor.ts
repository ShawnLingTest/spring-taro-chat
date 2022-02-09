import { Chain } from "@tarojs/taro";


export const tokenInterceptor = function(chain: Chain) {
  return chain.proceed(chain.requestParams)
}