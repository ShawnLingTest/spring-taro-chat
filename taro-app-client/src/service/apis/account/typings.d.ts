declare namespace API {
  namespace Account {
    type LoginParams = {
      username: string;
      password: string;
      captcha: string;
    };

    type LoginWeChatParams = {
      jscode: string;
    };

    type LoginResult = {
      accessToken: string;
    };

    type RegisterParams = {
      nickname: string;
      username: string;
      password: string;
    };

    type CaptchaParams = {
      type: "login";
    };

    type CaptchaResult = {
      image: string;
      code: string;
    };

    type CurrentResult = {
      id: number;
      nickname: string;
      avatarUrl: string;
    };
  }
}
