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
    return await axiosIns.post('auth/password/email', params)
  },
  async resetPassword(params) {
    return await axiosIns.post('auth/password/reset', params)
  },
}
