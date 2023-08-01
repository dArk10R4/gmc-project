import axios from 'axios'
import { useAuthStore } from '@/stores/AuthStore'

const axiosIns = axios.create({
  baseURL: "http://192.168.100.47:8000/",
  timeout: 60000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

axiosIns.interceptors.request.use(function (config) {  
  const authStore = useAuthStore()

  if (authStore.isLoggedIn && authStore.accessToken) {
    config.headers.Authorization = `Bearer ${authStore.accessToken}`
  }

  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

export default axiosIns

/*
texti deyismek 1 saat ceker 
asagidaki yerler ucun url yazmaliyam ,
o yerleri de 1 saat + 1 =  2 saat burani say
o yazilari deyismek 1 saat say

yeri update elemek 2 saat

iki reqeme de 1 saat
5 saat da o biri isler total 15 saat 
*/