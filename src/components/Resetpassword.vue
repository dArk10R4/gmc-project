<template>
    <main>
            <div class="login">
            <div class="login-form">
                <h2>{{ translate('login').value[1] }}</h2>

                <form @submit.prevent="handle_submit">
                    <div class="input-field">
                        <label for="password"><span>{{ translate('login').value[3] }}</span></label>
                        <div class="input">
                            <ion-icon name="key-outline"></ion-icon>
                            <input type="password" v-model="password1" :placeholder="translate('login').value[5]">
                            <p class="error" v-if="errorMessages.password">{{ errorMessages.password }}</p>
                        </div>
                    </div>
                    <div class="input-field">
                        <label for="password"><span>{{ translate('login').value[3] }}</span></label>
                        <div class="input">
                            <ion-icon name="key-outline"></ion-icon>
                            <input type="password" v-model="password2" :placeholder="translate('login').value[5]">
                            <p class="error" v-if="errorMessages.password">{{ errorMessages.password }}</p>
                        </div>
                    </div>

                    <button>{{ translate('reference').value[4] }}</button>

                    <div class="register">
                        <span>{{ translate('login').value[7] }}</span><router-link to="/auth/signin"><span
                                class="link">{{ translate('signIn').value }}</span></router-link>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
import AuthService from '@/services/AuthService';
import { useLocaleStore } from '@/stores/LocaleStore';
export default {
    computed: {
    translate() {
      const store = useLocaleStore();
      store.initializeLocale();
      return (key) => store.translate(key);
    },
  },
  mounted() {
    // const pk = this.$route.params.pk;
    // const token = this.$route.params.token;
    console.log(this.$route.params)
    // Do something with the 'id' variable, such as fetching data based on the ID.
  },
    data(){

        return {
            password1: '',
            password2:'',
            errorMessages: {
                password: '',
            }
        }
    },
    methods: {
        async handle_submit(e) {
            e.preventDefault()
            if(this.password1!=this.password2) {
                this.errorMessages.password = "Paswords doesnt match"
            }
            try {

                data = (await AuthService.resetPassword({pk:this.$route.params.pk,token:this.$route.params.token},{
                    password: this.password1
                })).data;
                console.log(data)
                this.errorMessages.password = "Successfull"
            } catch(e){
                console.log(e.response.data.email)
                this.errorMessages.password = e.response.data;

            }

        }
    }
}

</script>


<style scoped>
::-webkit-scrollbar {
    display: none;
}

.login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #000;
    padding: 1rem;
    gap: 2rem;
}

.login .text {
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    border-radius: 1rem;
    padding: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
}

.login .text .image img {
    width: 100%;
}

.login .text .about p {
    font-weight: 500;
    font-size: 1rem;
}

.login .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2.5rem;
    border-radius: 1.25rem;
    gap: 1rem;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}

.login .login-form h2 {
    color: rgb(223, 68, 68);
    width: 100%;
    font-size: 2.5rem;
    text-align: center;
    font-weight: 700;
    text-shadow: -0.6px -0.6px #f7cfc8, -0.5px -0.5px #f7cfc8,
        -0.4px -0.4px #f7cfc8, -0.3px -0.3px #f7cfc8, -0.2px -0.2px #f7cfc8,
        -0.1px -0.1px #f7cfc8, 0.1px 0.1px #f7cfc8, 0.2px 0.2px #f7cfc8,
        0.3px 0.3px #f7cfc8, 0.4px 0.4px #f7cfc8, 0.5px 0.5px #f7cfc8,
        0.6px 0.6px #f7cfc8, 0.7px 0.7px #f7cfc8, 0.8px 0.8px #f7cfc8,
        0.9px 0.9px #f7cfc8, 0.1px 0.1px #f7cfc8, 1.1px 1.1px #f7cfc8,
        1.2px 1.2px #f7cfc8, 1.3px 1.3px #f7cfc8, 1.4px 1.4px #f7cfc8,
        1.5px 1.5px #f7cfc8, 1.6px 1.6px #f7cfc8, 1.7px 1.7px #f7cfc8,
        1.8px 1.8px #f7cfc8, 1.9px 1.9px #f7cfc8, 2.0px 2.0px #f7cfc8,
        2.1px 2.1px #f7cfc8, 2.2px 2.2px #f7cfc8, 2.3px 2.3px #f7cfc8,
        2.4px 2.4px #f7cfc8, 2.5px 2.5px #f7cfc8, 2.6px 2.6px #f7cfc8,
        2.7px 2.7px #f7cfc8, 2.5px 2.5px #f7cfc8, 2.8px 2.8px #f7cfc8,
        2.9px 2.9px #f7cfc8, 3.0px 3.0px #f7cfc8, 3.1px 3.1px #f7cfc8,
        3.2px 3.2px #f7cfc8, 3.3px 3.3px #f7cfc8, 3.4px 3.4px #f7cfc8,
        3.5px 3.5px #f7cfc8, 3.6px 3.6px #f7cfc8, 3.7px 3.7px #f7cfc8,
        3.8px 3.8px #f7cfc8, 3.9px 3.9px #f7cfc8, 4.0px 4.0px;
}

.login .login-form form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.login .login-form form .input-field {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid black;
    padding: 1rem;
    border-radius: 1rem;
    position: relative;
}

.login .login-form form .input-field label span {
    font-weight: 500;
    font-size: 18px;
    position: absolute;
    top: -9px;
    background: #fff;
    padding-left: 9px;
    padding-right: 9px;
}

.login .login-form form .input-field .input {
    display: flex;
    gap: 1rem;
    position: relative;
    flex-wrap: wrap;
}

.login .login-form form .input-field .input ion-icon {
    background: rgba(173, 214, 248, 0.507);
    font-size: 1.25rem;
    border-radius: 50%;
    padding: 0.25rem;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    border: 2px solid rgb(173, 214, 248);
    color: rgb(223, 68, 68);
    transition: 0.5s ease-in-out all;
}

.login .login-form form .input-field .input input {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.33rem;
    padding-bottom: 0.33rem;
    font-size: 1rem;
    font-weight: 500;
    outline: none;
    border: none;
    border-top-left-radius: 1.25rem;
    border-top-right-radius: 1.25rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.26);
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    transition: 0.5s ease-in-out all;
}

.login .login-form form .input-field .input .error {
    color: rgb(197, 88, 88);
    font-weight: 500;
    font-size: 1rem;
    width: 100%;
    text-align: center;
    background: #fff;
}

.login .login-form form .input-field .input ion-icon:hover,
.login .login-form form .input-field .input input:hover {
    scale: 110%;
}

.login .login-form form .input-field .input input:focus {
    animation: shake 1s;
}

.login .login-form form button {
    border-radius: 1.25rem;
    padding: 0.50rem;
    font-size: 1.25rem;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    background: #f7cfc8;
    color: rgb(223, 68, 68);
    transition: 1s ease-in-out all;
}

.login .login-form form button:hover {
    cursor: pointer;
    background: rgb(223, 68, 68);
    color: #f7cfc8;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

.login .login-form form .register {
    color: #bd402a;
    font-size: 1.25rem;
    display: flex;
    gap: 0.33rem;
}

.login .login-form form .register .link {
    color: rgb(114, 114, 230);
}

@keyframes shake {
    0% {
        transform: translateX(0);
    }

    10%,
    90% {
        transform: translateX(-5px);
    }

    20%,
    80% {
        transform: translateX(5px);
    }

    30%,
    50%,
    70% {
        transform: translateX(-3px);
    }

    40%,
    60% {
        transform: translateX(3px);
    }

    100% {
        transform: translateX(0);
    }
}</style>

<route lang="yaml">
    meta:
      title: "reset password"
      requiresAuth: false
      redirectIfAuthenticated: false,
</route>