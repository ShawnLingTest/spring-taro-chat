import mockjs from "mockjs";

export default {
  "GET /chat/list": JSON.stringify(
    mockjs.mock({
      total: 100,
      "list|1-10": [
        {
          "id|+1": 1,
          user: {
            avatar: "@IMAGE(200x200)",
            nickname: "@CNAME()",
          },
          message: {
            type: "text",
            content: "是撒睡觉睡觉睡觉撒啊时间",
          },
        },
      ],
    })
  ),
};
