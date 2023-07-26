import axiosIns from '@/plugins/axios/index.js'

export default {
  async packages() {
    return await axiosIns.get('package/vips')
  },
  async register_get(id) {
    return await axiosIns.get(`package/vips/register/${id}`)
  },
  async register_post(id) {
    return await axiosIns.post(`package/vips/register/${id}`)
  },
  async active_packages() {
    return await axiosIns.get('package/active/vips')
  },
  async passive_packages() {
    return await axiosIns.get('package/passive/vips')
  }
}