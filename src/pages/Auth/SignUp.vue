<template>
    <main class="signup">
        <div class="title">
            <span>Sign up to win!</span>
        </div>

        <div class="signup-form" @submit.prevent="submitForm">
            <form action="">
                <div class="input-field">
                    <label for="username"><span>Username: </span></label>
                    <div class="input">
                        <ion-icon name="person-outline"></ion-icon>
                        <input v-model="username" type="text" placeholder="Enter your username!">
                        <p class="error" v-if="errorMessages.username">{{ errorMessages.username }}</p>
                    </div>
                </div>

                <div class="input-field">
                    <label for="email"><span>Email: </span></label>
                    <div class="input">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input v-model="email" type="email" placeholder="Enter your email!">
                        <p class="error" v-if="errorMessages.email">{{ errorMessages.email }}</p>
                    </div>
                </div>

                <div class="input-field">
                    <label for="phone"><span>Phone: </span></label>
                    <div class="input">
                        <ion-icon name="call-outline"></ion-icon>
                        <input v-model="phone" type="phone" placeholder="Enter your phone!">
                        <p class="error" v-if="errorMessages.phone">{{ errorMessages.phone }}</p>
                    </div>
                </div>

                <div class="input-field">
                    <label for="reference"><span>Reference Code: </span></label>
                    <div class="input">
                        <ion-icon name="qr-code-outline"></ion-icon>
                        <input v-model="referral" type="text" placeholder="Enter your reference code!">
                        <p class="error" v-if="errorMessages.referral">{{ errorMessages.referral }}</p>
                    </div>
                </div>

                <div class="input-field">
                    <label for="password"><span>Password: </span></label>
                    <div class="input">
                        <ion-icon name="key-outline"></ion-icon>
                        <input v-model="password" type="password" placeholder="Enter your password!">
                        <p class="error" v-if="errorMessages.password">{{ errorMessages.password }}</p>
                    </div>
                </div>

                <div class="input-field">
                    <label for="confirm_password"><span>Confirm Password: </span></label>
                    <div class="input">
                        <ion-icon name="key-outline"></ion-icon>
                        <input v-model="confirmPassword" type="password" placeholder="Enter your password!">
                        <p class="error" v-if="errorMessages.confirmPassword">{{ errorMessages.confirmPassword }}</p>
                    </div>
                </div>

                <button>Sign Up</button>
            </form>

            <div class="line-top"></div>
            <div class="line-bottom"></div>
        </div>
    </main>
</template>

<script>
import { useAuthStore } from '@/stores/AuthStore'

export default {
    data() {
        return {
            username: '',
            email: '',
            phone: '',
            reference: '',
            password: '',
            confirmPassword: '',
            errorMessages: {
                username: '',
                email: '',
                phone: '',
                password: '',
                confirmPassword: '',
                referral: ''
            }
        }
    },
    methods: {
        async submitForm() {
            const authStore = useAuthStore()

            const params = {
                username: this.username,
                email: this.email,
                phone: this.phone,
                referral: this.referral,
                password: this.password,
                confirmPassword: this.confirmPassword,
                terms: true
            }

            try {
                await authStore.register(params)
            } catch (error) {
                if (error.response.status === 422) {
                    this.errorMessages = error.response.data;
                }
            }
        }
    },
    mounted() {
        const query = this.$route.query;
        if (query.referral) {
            this.referral = query.referral;
        }
    }
}
</script>

<style scoped>
::-webkit-scrollbar {
    display: none;
}

.signup {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    background: linear-gradient(to right, #232526, #8a9cad);
    height: calc(100% - 2rem);
    margin: 1rem;
    border-radius: 1rem;
    padding: 1rem;
    overflow: scroll;
}

.signup .title {
    font-size: 1.75rem;
    font-weight: 700;
    background: linear-gradient(to right, #fbd3e9, #bb377d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-bottom: 6px double #c46c9b;
}

.signup .signup-form {
    border: 2px snow solid;
    width: 100%;
    position: relative;
    border-top-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    color: #fff;
}

.signup .signup-form form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
}

.signup .signup-form form .input-field {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.signup .signup-form form .input-field .input {
    display: flex;
    gap: 1rem;
    padding: 0.75rem;
    justify-content: center;
    flex-wrap: wrap;
}

.signup .signup-form form .input-field .input ion-icon {
    background: #bb377d;
    font-size: 1.5rem;
    border-radius: 50%;
    padding: 0.33rem;
    border: 1px solid #cc95c0;
    transition: 0.5 ease-in-out all;
}

.signup .signup-form form .input-field .input input {
    border-radius: 1rem;
    padding: 0.33rem;
    border: 2px solid red;
    font-weight: 500;
    width: 75%;
}

.signup .signup-form form .input-field .input .error {
    color: rgb(255, 230, 0);
    width: 100%;
}

.signup .signup-form form .input-field .input input:focus {
    border: 2px solid palevioletred;
    outline: none;
    scale: 105%;
}

.signup .signup-form form button {
    outline: none;
    border: 2px solid #dbd4b4;
    padding: 0.75rem;
    border-radius: 2rem;
    font-weight: 700;
    font-size: 1.19rem;
    background: #cc95c0;
    color: #dbd4b4;
    transition: 0.5s ease-in-out all;
}

.signup .signup-form form button:hover {
    background: #dbd4b4;
    color: #cc95c0;
    border: 2px solid #cc95c0;
}

.signup .signup-form .line-top {
    position: absolute;
    width: 50%;
    height: 2px;
    top: -2px;
    right: -2px;
    background: linear-gradient(to right, #cc95c0, #dbd4b4, #7aa1d2);
}

.signup .signup-form .line-bottom {
    position: absolute;
    width: 50%;
    height: 2px;
    bottom: -2px;
    left: -2px;
    background: linear-gradient(to right, #cc95c0, #dbd4b4, #7aa1d2);
}
</style>

<route lang="yaml">
    meta:
      title: "Sign In"
      requiresAuth: false
      redirectIfAuthenticated: true
</route>