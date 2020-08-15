import Mock from 'mockjs'
import '@/mock/extend'

const user = Mock.mock({
  name: '@ADMIN',
  avatar: '@AVATAR',
  address: '@CITY',
  position: '@POSITION'
})
Mock.mock(`${process.env.VUE_APP_API_BASE_URL}/login`, 'post', ({body}) => {
  let result = {}
  const {name, password} = JSON.parse(body)

  if (name !== 'admin' || password !== '123') {
    result.code = -1
    result.message = 'Incorrect username or password(admin/123)'
  } else {
    result.code = 0
    result.message = Mock.mock('@TIMEFIX').CN + '，Welcome back'
    result.data = {}
    result.data.user = user
    result.data.token = 'Authorization:' + Math.random()
    result.data.expireAt = new Date(new Date().getTime() + 30 * 60 * 1000)
    result.data.permissions = [{id: 'queryForm', operation: ['add', 'edit', 'delete']}]
    result.data.roles = [{id: 'admin', operation: ['add', 'edit', 'delete']}]
  }
  return result
})
