export const loginRoute = function (route) {
    return {
      name: 'Auth-SignIn',
      query: { redirect: route.fullPath },
    }
  }
  