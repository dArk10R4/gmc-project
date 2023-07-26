import { defineStore } from 'pinia'
import router from '@/router'
import UserService from '@/services/UserService'

export const useUserStore = defineStore('UserStore', {
    // state
    state: () => {
        return {
            user: null,
        }
    },

    // getters
    getters: {
        activeUser: state => state.user
    },

    // actions
    actions: {
        async fill() {
            await this.fillUser()
        },
        async fillUser() {
            try {
                this.user = (await UserService.profile()).data
            } catch(error) {
                if (error.response.status === 401) {
                    localStorage.clear()
                }
            }
        }
    },
})
