import Request from "../../request";

/**
 * 登录
 * @param data 参数
 * @returns
 */
export function loginByUsername(data: API.Account.LoginParams) {
  return Request.post<API.Account.LoginResult>("/account/login", data);
}

/**
 * 微信授权登录
 * @param data 参数
 * @returns
 */
export function loginByWeChat(data: API.Account.LoginWeChatParams) {
  return Request.post<API.Account.LoginResult>("/account/wechat", data);
}

/**
 * 注册账号
 * @param data 参数
 * @returns
 */
export function register(data: API.Account.RegisterParams) {
  return Request.post("/account/register", data);
}

/**
 * 获取验证码
 * @param data 参数
 * @returns
 */
export function getCaptcha(data: API.Account.CaptchaParams) {
  return Request.post<API.Account.CaptchaResult>("/account/captcha", data);
}

/**
 * 获取当前用户信息
 * @returns
 */
export function getCurrent() {
  return Request.get<API.Account.CurrentResult>("/account/current");
}
