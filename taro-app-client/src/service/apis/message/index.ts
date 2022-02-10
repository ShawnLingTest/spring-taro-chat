import Request from "../../request";

/**
 * 获取消息列表
 * @param params 参数
 * @returns
 */
export function getMessageList(params: API.Message.MessageListParams) {
  return Request.get<API.Message.MessageListResult>("/message/list", {
    params,
  });
}
