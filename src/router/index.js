import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages'
import { loginRoute } from '@/router/utils'
import { useAuthStore } from '@/stores/AuthStore'
import { storeToRefs } from '@/utils/storeToRefs'
import Resetpassword from '@/components/Resetpassword.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth/resetpassword/:pk/:token',
      name: 'resetpassword',
      component: Resetpassword,
    },
    ...routes,
    
    
  ],
})

router.beforeEach(async (to,from) => {
  const authStore = useAuthStore()
  if(to.name =="resetpassword"){

     return;
  }
  const { isLoggedIn } = await storeToRefs(authStore)
  if (to.meta.requiresAuth !== false && !isLoggedIn.value) {
    return loginRoute(to)
  }

  if (isLoggedIn.value && to.meta.redirectIfAuthenticated) {
    return { name: 'index' }
  }
})

export default router;
