<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <main>
        <div class="profile" v-if="user">
            <div class="image">
                <img width="150" v-if="user" :src="user.image" alt="">
            </div>
            <div class="name">
                <span>{{ user.username }}</span>
                <span>Crypto & Miner</span>
            </div>
            <div class="stats">
                <div class="stat">
                    <span>Invest</span>
                    <span>{{ totalPackages }}</span>
                </div>

                <div class="stat">
                    <span>Profit</span>
                    <span>{{user.balance_f}} TRX</span>
                </div>

                <div class="stat">
                    <span>On Invest</span>
                    <span>{{ totalMoney }} TRX</span>
                </div>
            </div>
        </div>
        <div class="buttons">
            <button class="bg_color"><RouterLink to="/deposit">Deposit</RouterLink></button>
            <button class="bg_color"><RouterLink to="/withdraw">Withdraw</RouterLink></button>
        </div>
        <div class="wallet" v-if="user">
            <div class="balance bg_color">
                <span>Flexible</span>
                <span>{{ user.balance_f }} TRX</span>
            </div>
            <div class="balance bg_color">
                <span>Real</span>
                <span>{{ user.balance_r }} TRX</span>
            </div>
        </div>
        <div style="text-align: center;">

            <button @click="transferMoney" class="transferbutton">Transfer between balances</button>
        </div>
        <div class="success-message" v-if="showSuccessMessage">{{ successMessage }}</div>
        <div class="error-message" v-if="showErrorMessage">{{ errorMessage }}</div>
    </main>
</template>

<script>
import { useUserStore } from '@/stores/UserStore'
import UserService from '../../services/UserService';
import PackageService from '@/services/PackageService';
export default {
  data() {
    return {
        user: null,
        showSuccessMessage: false,
        successMessage: '',
        showErrorMessage: false,
        errorMessage: '',
        totalPackages: 0,
        totalMoney: 0,
        activePackages : null
    }
  },
  methods:{
    async transferMoney(){
       try {
            const response = await UserService.transfer({});
            this.successMessage = 'Transfer succesfull';
            this.showSuccessMessage= true;
            setTimeout(() => {
                    // 5 saniye sonra başarılı mesajını kapat
                    this.showSuccessMessage = false;
                }, 5000);
        } catch (error) {
            if (error.response.status === 400) {
                    this.errorMessage = error.response.data['error']
                    this.showErrorMessage = true;

                    setTimeout(() => {
                        // 5 saniye sonra başarılı mesajını kapat
                        this.showErrorMessage = false;
                    }, 5000);
                }
        }
        const userStore = useUserStore()
        await userStore.fill()
        this.user = userStore.user

    }
  },
  async created() {
    const userStore = useUserStore()
      await userStore.fill()
      this.user = userStore.user
      console.log(this.user)
      this.activePackages = (await PackageService.active_packages()).data
      this.totalPackages = Object.keys(this.activePackages).length
      Object.values(this.activePackages).forEach(item => {
      this.totalMoney += item.package.price;
    });
  }
}
</script>

<style scoped>
main {
    color: #fff;
}

.transferbutton{
    border : none;
    padding: 15px 10px;
    margin:20px ;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700px;
    border-radius: 5px;
    font-size: 16px;
    background-color: rgb(94, 94, 206);

}
.transferbutton:hover{
    background-color: rgb(155, 155, 228);
}
.transferbutton:active{
    background-color: blue;
    color: white
}

.bg_color{    background: #9ABDDC !important;color: black !important;font-weight: 500!important; }
.profile{
    width: 90%;
    margin: auto;
    margin-top: 20px;
    color: black;
    border-radius: 60px;
    /* background-color: rgb(255, 255, 255); */
    background-color: silver;
    font-family: Arial, Helvetica, sans-serif !important;
    font-weight: 600;
}
.profile .image img{
    width: 180px;
    height: 140px;
    border: 5px solid rgb(0, 0, 0);
    border-radius: 50%;
    margin-top: 20px;
}
.profile .image{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.name{
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.stats{
    display: flex;
    width: 100%;
    justify-content: space-around;
}
.stat{
    display: flex;
    flex-direction: column;
    padding: 29px;
    justify-content: center;
    align-items: center;
}
.buttons{
    display: flex;
    justify-content: center;
    align-items: center;
}
.buttons button{
    width: 110px;
    height: 50px;
    margin-top: 10px;
    margin-left: 20px;
    border: none;
    border-radius: 6px;
    background-color: rgb(255, 255, 255);
    color: black;
}
.wallet{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.wallet .balance{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(66, 66, 66);
    height: 60px;
    width: 40%;
    color: white;
    border-radius: 5px;
    margin-top: 20px;
}


.success-message {
  position: absolute;
  bottom: 1.5rem;
  left: 25%;
  width: 50%;
  height: 3rem;
  background: rgba(172, 255, 47, 0.747);
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