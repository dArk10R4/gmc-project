import axiosIns from '@/plugins/axios/index.js'

export default {
  async login(params) {
    return await axiosIns.post('auth/login', params)
  },
  async register(params) {
    return await axiosIns.post('auth/register', params)
  },
  async logout(params) {
    await axiosIns.post('auth/logout', params)
  },
  async refreshToken(params) {
    return await axiosIns.post('auth/token/refresh', params)
  },
  async forgotPassword(params) {
    return await axiosIns.post('auth/reset-password', params)
  },
  async resetPassword({pk,token},params) {
    return await axiosIns.post(`auth/reset-password/${pk}/${token}/`,params,{
      headers:{
        'Content-Type': 'application/json'
      }
    })
  },
}
