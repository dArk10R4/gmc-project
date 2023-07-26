<template>
    <main>
        <div class="containersettings" v-if="user">
            <h2 style="text-align: center; margin: 10px 0px;">Setttings</h2>
            <div class="image">
                <img :src="user.image" alt="">
                <ion-icon name="create-outline"></ion-icon>
            </div>
            <div class="inputdivi">
            <input type="text" :value="user.username" disabled value="username">
            <ion-icon name="create-outline"></ion-icon>
            </div>
            <div class="inputdivi">
            <input type="text" :value="user.email" disabled value="email">
            <ion-icon name="create-outline"></ion-icon>
            </div>
            <div class="inputdivi">
            <input type="text" :value="user.phone" disabled>
            <ion-icon name="create-outline"></ion-icon>
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
.containersettings{
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
}
.image img{
    width: 100px;
}
.image{
    display: flex;
    justify-content: center;
    align-items: center;
}
.inputdivi{
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
}
.inputdivi ion-icon{
    font-size: 20px;
    padding: 10px;
    background-color: gray;
    border-radius: 50%;
    margin-left: 5px;
}
.image ion-icon{
    font-size: 20px;
    padding: 10px;
    background-color: gray;
    border-radius: 50%;
    margin-left: 5px;
}
.inputdivi input{
    width: 90%;
    height: 40px;
}
</style>