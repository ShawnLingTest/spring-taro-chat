import Request from "../../request";


/**
 * 获取用户资料
 * @param id 用户id
 * @returns 
 */
export function getUserProfile(id: string) {
  return Request.get<API.User.UserProfileResult>('/user/profile', {
    data: {
      id
    }
  })
}