import mockjs from "mockjs";

const current = JSON.stringify(
  mockjs.mock({
    id: 12121223,
    nickname: "@CNAME()",
    avatarUrl: "@IMAGE(200x200)",
  })
);

export default {
  "GET /account/current": current,
};
