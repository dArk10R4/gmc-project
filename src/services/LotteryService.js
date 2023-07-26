import axiosIns from '@/plugins/axios/index.js'

export default {
  async lotteries() {
    return await axiosIns.get('ticket/lotteries')
  }
}