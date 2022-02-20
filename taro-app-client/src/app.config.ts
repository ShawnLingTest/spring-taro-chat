export default {
  pages: [
    "pages/contacts/index",
    "pages/message/index",
    "pages/me/index",
    "pages/liveChat/index",
    "pages/login/index",
    "pages/myProfile/index",
    "pages/userProfile/index"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    selectedColor: "#7EB5A6",
    list: [
      {
        pagePath: "pages/message/index",
        text: "消息",
        iconPath: './assets/tabs/message.png',
        selectedIconPath: './assets/tabs/message-active.png'
      },
      {
        pagePath: "pages/contacts/index",
        text: '联系人',
        iconPath: './assets/tabs/contacts.png',
        selectedIconPath: './assets/tabs/contacts-active.png'
      },
      {
        pagePath: "pages/me/index",
        text: "个人中心",
        iconPath: './assets/tabs/me.png',
        selectedIconPath: './assets/tabs/me-active.png'
      },
    ],
  },
};
