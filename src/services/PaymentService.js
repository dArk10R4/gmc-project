import axiosIns from '@/plugins/axios/index.js'

export default {
  async withdraw(params) {
    return await axiosIns.post('payment/withdraw', params)
  }
}
