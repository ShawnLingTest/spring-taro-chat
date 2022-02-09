import { Chain } from "@tarojs/taro";


export const responseInterceptor = function(chain: Chain) {
  return chain.proceed(chain.requestParams).then((result) => {
    const {} = result;

    return result;
  })
}