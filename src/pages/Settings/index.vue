<template>
    <main>
        <div class="containersettings" v-if="user">
            <h2 style="text-align: center; margin: 10px 0px;">Settings</h2>
            <div class="image">
                <img :src="user.image" alt="">
                <input ref= 'imageInput'  type="file" v-if="imageChange" @change="handleImageChange">
                <ion-icon :name="!imageChange ? 'create-outline' : 'checkmark-outline'"
                    @click="toggleImageInput"></ion-icon>
            </div>
            <div class="inputdivi">
                <input type="text" v-model="user.username" :disabled="usernameDisabled">
                <ion-icon :name="usernameDisabled ? 'create-outline' : 'checkmark-outline'"
                    @click="toggleUsernameInput"></ion-icon>
            </div>

            <div class="inputdivi">
                <input type="text" v-model="user.email" :disabled="emailDisabled">
                <ion-icon :name="emailDisabled ? 'create-outline' : 'checkmark-outline'"
                    @click="toggleEmailInput"></ion-icon>
            </div>
            <div class="inputdivi">
                <input type="text" v-model="user.phone" :disabled="phoneDisabled">
                <ion-icon :name="phoneDisabled ? 'create-outline' : 'checkmark-outline'"
                    @click="togglePhoneInput"></ion-icon>
            </div>
        </div>

        <div class="success-message" v-if="showSuccessMessage">{{ successMessage }}</div>
        <div class="error-message" v-if="showErrorMessage">{{ errorMessage }}</div>
    </main>
</template>
  
<script>
import { useUserStore } from '@/stores/UserStore'
import axios from "axios"
import axiosIns from '@/plugins/axios/index.js'
import UserService from '@/services/UserService'

export default {
    data() {
        return {
            usernameDisabled: true,
            emailDisabled: true,
            phoneDisabled: true,
            imageChange: false,
            showSuccessMessage: false,
            successMessage: '',
            showErrorMessage: false,
            errorMessage: '',
            user: {
                username: '',
                password: '',
                phone: '',
                password: '',
                image: ''
            }
        }
    },
    async created() {
        const userStore = useUserStore()
        await userStore.fill()
        this.user = userStore.user
        console.log(this.user)
    },
    methods: {
        toggleImageInput() {
            this.imageChange = !this.imageChange
            const input = this.$refs.imageInput
            if(this.imageChange) return;
            const file = input.files[0];
            if (!this.imageChange && input.files.length>0) {
                const allowedFormats = ['image/jpeg', 'image/jpg', 'image/png'];

            if (allowedFormats.includes(file.type)) {
                const reader = new FileReader();
                reader.onload = () => {
                    this.user.image = reader.result;
                    this.uploadImage(input.files[0]);
                };
                reader.readAsDataURL(file);
            } else {
                // Handle error, invalid file format
            }
                }
           // console.log(input)
            //input.click()
        },
        handleImageChange(event) {
            const file = event.target.files[0];
            const allowedFormats = ['image/jpeg', 'image/jpg', 'image/png'];

            if (allowedFormats.includes(file.type)) {
                const reader = new FileReader();
                reader.onload = () => {
                    this.user.image = reader.result;
                    
                };
                reader.readAsDataURL(file);
            } else {
                // Handle error, invalid file format
            }
        },
        uploadImage(file) {
            const formData = new FormData();
            formData.append('image', file);

            axiosIns
                .post('user/change/image', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                    }
                })
                .then(response => {
                    this.successMessage = response.data.message;
                    this.showSuccessMessage = true;

                    setTimeout(() => {
                        // 5 saniye sonra başarılı mesajını kapat
                        this.showSuccessMessage = false;
                    }, 5000);
                })
                .catch(error => {
                    this.errorMessage = error.response.data.error;
                    this.showErrorMessage = true;

                    setTimeout(() => {
                        // 5 saniye sonra başarılı mesajını kapat
                        this.showErrorMessage = false;
                    }, 5000);
                });
        },
        async toggleUsernameInput() {
            if(!this.usernameDisabled) {
                const params = {
                    username: this.user.username
                }

                try {
                    const response = (await UserService.changeUsername(params))
                    this.successMessage = response.data.message;
                    this.showSuccessMessage = true;

                    setTimeout(() => {
                        // 5 saniye sonra başarılı mesajını kapat
                        this.showSuccessMessage = false;
                    }, 5000);
                } catch(error) {
                    this.errorMessage = error.response.data.error;
                    console.log(error.response.data.error)
                    this.showErrorMessage = true;

                    setTimeout(() => {
                        // 5 saniye sonra başarılı mesajını kapat
                        this.showErrorMessage = false;
                    }, 5000);
                }
            }

            this.usernameDisabled = !this.usernameDisabled
        },
        async toggleEmailInput() {
            if(!this.emailDisabled) {
                const params = {
                    email: this.user.email
                }

                try {
                    const response = (await UserService.changeEmail(params))
                    this.successMessage = response.data.message;
                    this.showSuccessMessage = true;

                    setTimeout(() => {
                        // 5 saniye sonra başarılı mesajını kapat
                        this.showSuccessMessage = false;
                    }, 5000);
                } catch(error) {
                    this.errorMessage = error.response.data.error;
                    console.log(error.response.data.error)
                    this.showErrorMessage = true;

                    setTimeout(() => {
                        // 5 saniye sonra başarılı mesajını kapat
                        this.showErrorMessage = false;
                    }, 5000);
                }
            }

            this.emailDisabled = !this.emailDisabled
        },
        async togglePhoneInput() {
            if(!this.phoneDisabled) {
                const params = {
                    phone: this.user.phone
                }

                try {
                    const response = (await UserService.changePhone(params))
                    this.successMessage = response.data.message;
                    this.showSuccessMessage = true;

                    setTimeout(() => {
                        // 5 saniye sonra başarılı mesajını kapat
                        this.showSuccessMessage = false;
                    }, 5000);
                } catch(error) {
                    this.errorMessage = error.response.data.error;
                    console.log(error.response.data.error)
                    this.showErrorMessage = true;

                    setTimeout(() => {
                        // 5 saniye sonra başarılı mesajını kapat
                        this.showErrorMessage = false;
                    }, 5000);
                }
            }

            this.phoneDisabled = !this.phoneDisabled
        }
    }
}
</script>
  
<style scoped>
main {
    color: #fff;
}

.containersettings {
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
}

.image img {
    width: 100px;
}

.image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
}

.inputdivi {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
}

.inputdivi ion-icon {
    font-size: 20px;
    padding: 10px;
    background-color: gray;
    border-radius: 50%;
    margin-left: 5px;
}

.image ion-icon {
    font-size: 20px;
    padding: 10px;
    background-color: gray;
    border-radius: 50%;
    margin-left: 5px;
}

.image input {
    position: absolute;
    left: 50%;
    bottom: 0;
}

.inputdivi input {
    width: 90%;
    height: 40px;
}

.success-message {
  position: absolute;
  bottom: 1.5rem;
  left: 25%;
  width: 50%;
  height: 3rem;
  background: rgba(72, 107, 18, 0.747);
  border-radius: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.error-message {
  position: absolute;
  bottom: 1.5rem;
  left: 25%;
  width: 50%;
  height: 3rem;
  background: rgba(255, 47, 47, 0.747);
  color: #fff;
  border-radius: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
  