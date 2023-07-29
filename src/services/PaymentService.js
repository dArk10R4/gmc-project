import axiosIns from '@/plugins/axios/index.js'

export default {
  async withdraw(params) {
    return await axiosIns.post('payment/withdraw', params)
  },
  async deposit (params){
    return await axiosIns.post('payment/deposit', params,{
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + localStorage.getItem('accessToken')
      }
    })
  }
}
