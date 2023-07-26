import { defineStore } from 'pinia'
import router from '@/router'
import AuthService from '@/services/AuthService'

export const useAuthStore = defineStore('AuthStore', {
    // state
    state: () => {
        return {
            tokens: {
                access: null,
                refresh: null,
            },
        }
    },

    // getters
    getters: {
        isLoggedIn: state => state.accessToken,
        accessToken: state => state.tokens.access || localStorage.getItem('accessToken'),
        refreshToken: state => state.tokens.refresh || localStorage.getItem('refreshToken'),
    },

    // actions
    actions: {
        async login(params) {
            const response = await AuthService.login(params)

            this.setTokens(response.data.tokens, params.rememberMe)
            router.push({ path: '/profile' })
        },
        redirectToLogin() {
            router.push({ path: '/auth/signin' })
        },
        async register(params) {
            const response = await AuthService.register(params)

            if (response.status === 201) {
                this.redirectToLogin()
            }
        },
        setTokens(tokens, rememberMe = false) {
            this.tokens.access = tokens.access
            localStorage.setItem('accessToken', tokens.access)

            if (rememberMe === true) {
                this.tokens.refresh = tokens.refresh
                localStorage.setItem('refreshToken', tokens.refresh)
            }
        },
        /*async forgotPassword(params) {
          const response = await authService.forgotPassword(params)
    
          if (response.status === 200) {
            notify.success(t('Password reset email sent.'))
          }
        },
        async resetPassword(params) {
          const response = await authService.resetPassword(params)
    
          if (response.status === 200) {
            notify.success(t('Your password has been changed.'))
          }
        },
        async refreshAccessToken() {
          try {
            const { data } = await authService.refreshToken({
              refresh: this.refreshToken,
            })
    
            this.setTokens(data)
    
            return data.access
          } catch (error) {
            this.removeAndRedirectToLogin()
    
            throw error
          }
        },*/
        async logout() {
          if (this.refreshToken) {
            try {
              await authService.logout({
                refresh: this.refreshToken,
              })
            } catch (e) {
            }
          }
    
          this.removeAndRedirectToLogin()
        },/*
        setLanguage(language) {
          i18n.global.locale.value = language
          localStorage.setItem('language', language)
        },*/
        
        
        removeAccessToken() {
          this.tokens.access = null
          localStorage.removeItem('accessToken')
        },
        removeRefreshToken() {
          this.tokens.refresh = null
          localStorage.removeItem('refreshToken')
        },
        removeTokens() {
          this.removeAccessToken()
          this.removeRefreshToken()
        },
        removeAndRedirectToLogin() {
          this.removeTokens()
    
          this.$reset()
    
          this.redirectToLogin()
        },
    },
})
