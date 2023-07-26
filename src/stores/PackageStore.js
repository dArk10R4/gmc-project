import { defineStore } from 'pinia'
import router from '@/router'
import PackageService from '@/services/PackageService'

export const usePackageStore = defineStore('PackageStore', {
    // state
    state: () => {
        return {
            packages: null,
        }
    },

    getters: {
        activeUser: state => state.user
    },

    actions: {
        async fill() {
            await this.fillPackages()
        },
        async fillPackages() {
            this.packages = (await PackageService.packages()).data
        }
    },
})
