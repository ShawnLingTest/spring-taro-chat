declare namespace API {
  namespace Chat {
    type ChatHistoryParams = {
      pageSize: number;
      current: number;
    };
    type ChatHistoryItem = {
      id: number;
      user: {
        avatar: string;
        nickname: string;
      };
    };
    type ChatHistoryListResult = {
      list: ChatHistoryItem[];
      total: number;
    };
  }
}
