import { options } from "@tarojs/runtime";
import {
  RequestParams,
  addInterceptor,
  request,
  interceptors,
} from "@tarojs/taro";
import { responseInterceptor } from "./interceptors/responseInterceptor";
import { tokenInterceptor } from "./interceptors/tokenInterceptor";
import { urlInterceptor } from "./interceptors/urlInterceptor";

// 添加 log 日志 拦截器
addInterceptor(interceptors.logInterceptor);

// 过期 拦截器
addInterceptor(interceptors.timeoutInterceptor);

// url 拦截器
addInterceptor(urlInterceptor);

// 添加 accessToken 拦截器
addInterceptor(tokenInterceptor);

// 添加 reponse data 处理 拦截器
addInterceptor(responseInterceptor);

/**
 * 请求对象
 */
export default class Request {
  /**
   * get请求
   * @param url 路径
   * @param options 参数
   * @returns request
   */
  public static get<T>(url: string, options?: Omit<RequestParams, "url">) {
    return request<T>({
      ...options,
      method: "GET",
      url,
    });
  }

  /**
   * post请求
   * @param url 路径
   * @param data 参数
   * @returns request
   */
  public static post<T, U = any>(url: string, data: U) {
    return request<T, U>({
      ...options,
      data,
      method: "POST",
      url,
    });
  }
}
