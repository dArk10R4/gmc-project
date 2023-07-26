import axiosIns from '@/plugins/axios/index.js'

export default {
  async profile(params) {
    return await axiosIns.get('user/profile', params)
  },
  async reference(params) {
    return await axiosIns.get('user/reference', params)
  },
  async refdetail(params) {
    return await axiosIns.get('user/refdetail', params)
  },
  async draw(params) {
    return await axiosIns.get('user/draw', params)
  },
  async referral() {
    return await axiosIns.get('user/referral')
  },
  async changeUsername(params) {
    return await axiosIns.post('user/change/username', params)
  },
  async changeEmail(params) {
    return await axiosIns.post('user/change/email', params)
  },
  async changePhone(params) {
    return await axiosIns.post('user/change/phone', params)
  },
}
