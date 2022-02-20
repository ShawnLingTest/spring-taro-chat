import mockjs from 'mockjs';


const getContactList = mockjs.mock({
  'list|10': [
    {
      title: '@character()',
      key: '@character()',
      'items|10': [
        {
          id: '@integer(1, 100)',
          name: '@CNAME()',
          avatar: '@IMAGE(200x200)'
        }
      ]
    }
  ]
}).list;

const getContactDetail = mockjs.mock({})

export default {
  'GET /contact/list': JSON.stringify(getContactList),
  'GET /contact/detail': JSON.stringify(getContactDetail)
}