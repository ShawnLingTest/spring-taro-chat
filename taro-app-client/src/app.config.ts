export default {
  pages: [
    "pages/me/index",
    "pages/message/index",
    "pages/liveChat/index",
    "pages/login/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/message/index",
        text: "消息",
      },
      {
        pagePath: "pages/me/index",
        text: "个人中心",
      },
    ],
  },
};
