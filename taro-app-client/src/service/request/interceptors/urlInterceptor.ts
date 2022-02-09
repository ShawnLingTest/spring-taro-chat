import { Chain } from "@tarojs/taro";
import { urls } from '../../config';

export interface Urls {
  dev: string;
  prod: string;
}

const current = () => {
  return process.env.NODE_ENV === 'development' ? urls.dev : urls.prod;
};

export const urlInterceptor = function (chain: Chain) {
  const requestParams = chain.requestParams;
  console.log(requestParams);
  return chain.proceed({
    ...requestParams,
    url: current() + requestParams.url
  })
}