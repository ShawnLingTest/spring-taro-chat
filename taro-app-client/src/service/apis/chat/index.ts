import Request from "../../request";

/**
 * 获取聊天历史
 * @returns
 */
export function getChatHistoryList(params: API.Chat.ChatHistoryParams) {
  return Request.get<API.Chat.ChatHistoryListResult>("/chat/list", {
    data: params,
  });
}
