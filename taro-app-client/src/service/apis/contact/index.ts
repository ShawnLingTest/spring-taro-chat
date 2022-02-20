import Request from "@/service/request";


/**
 * 获取联系人列表
 * @param params 参数
 * @returns 
 */
export function getContactList(params: API.Contact.ContactListParams) {
  return Request.get<API.Contact.ContactListResult>('/contact/list', {
    params
  })
}


/**
 * 获取联系人详情
 * @returns 
 */
export function getContactDetail() {
  return Request.get('/contact/detail', {

  })
}