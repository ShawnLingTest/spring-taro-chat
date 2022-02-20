import mockjs from 'mockjs';


const getMessageList = (): API.Message.MessageListResult => {
  return mockjs.mock({
    total: 100,
    'list|20': [
      {
        id: "@integer(1, 10000)",
        avatarUrl: '@IMAGE(200x200)',
        nickname: '@CNAME()',
        lastContent: '@cparagraph()',
        lastTime: '@date("yyyy-MM-dd")',
        badge: '@integer(-1, 200)',
      }
    ]
  })
}

export default {
  'GET /message/list': JSON.stringify(getMessageList()),
}