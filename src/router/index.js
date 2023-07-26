import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages'
import { loginRoute } from '@/router/utils'
import { useAuthStore } from '@/stores/AuthStore'
import { storeToRefs } from '@/utils/storeToRefs'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...routes,
  ],
})

router.beforeEach(async to => {
  const authStore = useAuthStore()

  const { isLoggedIn } = storeToRefs(authStore)

  if (to.meta.requiresAuth !== false && !isLoggedIn.value) {
    return loginRoute(to)
  }

  if (isLoggedIn.value && to.meta.redirectIfAuthenticated) {
    return { name: 'index' }
  }
})

export default router;
