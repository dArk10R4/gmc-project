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
  },
  async getWithdrawsData() {
    return  await axiosIns.get('payment/withdraw',{
      headers: {
        'Content-Type': 'application/json'
      }
    } )
  },
  async getDepositData() {
    return  await axiosIns.get('payment/deposit',{
      headers: {
        'Content-Type': 'application/json'
      }
    } )
  }
}
