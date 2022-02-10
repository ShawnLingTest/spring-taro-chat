declare namespace API {
  namespace Message {
    type MessageListParams = API.Common.PageParams;

    type MessageListItem = {
      id: number;
      avatarUrl: string;
      nickname: string;
      lastContent: string;
    };

    type MessageListResult = API.Common.PageResult<MessageListItem>;
  }
}
