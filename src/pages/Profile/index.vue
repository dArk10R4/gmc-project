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
                    <span>12</span>
                </div>

                <div class="stat">
                    <span>Profit</span>
                    <span>{{user.balance_f}} TRX</span>
                </div>

                <div class="stat">
                    <span>On Invest</span>
                    <span>1440 TRX</span>
                </div>
            </div>
        </div>
        <div class="buttons">
            <button><RouterLink to="/deposit">Deposit</RouterLink></button>
            <button><RouterLink to="/withdraw">Withdraw</RouterLink></button>
        </div>
        <div class="wallet" v-if="user">
            <div class="balance">
                <span>Flexible</span>
                <span>{{ user.balance_f }} TRX</span>
            </div>
            <div class="balance">
                <span>Real</span>
                <span>{{ user.balance_r }} TRX</span>
            </div>
        </div>
    </main>
</template>

<script>
import { useUserStore } from '@/stores/UserStore'

export default {
  data() {
    return {
      user: null
    }
  },

  async created() {
    const userStore = useUserStore()
      await userStore.fill()
      this.user = userStore.user
      console.log(this.user)
  }
}
</script>

<style scoped>
main {
    color: #fff;
}
.profile{
    width: 90%;
    margin: auto;
    margin-top: 20px;
    color: black;
    border-radius: 60px;
    background-color: rgb(255, 255, 255);
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
</style>