<template>
  <main>
    <div class="invest">
      <div class="headline">
        <span>Choose your machine!</span>
      </div>

      <div class="information">
        <div class="head">
          <span>IMPORTANT!!!</span>
        </div>

        <div class="text">
          <p>Before choosing your machine, you need to know that the amount you earn after making an investment is
            reflected in your account when the machine expires at the time it represents.</p>
        </div>
        <div class="star"></div>
      </div>

      <div class="packages">
        <div class="package" v-for="(item, index) in packages" :key="index" :class="getClassName(item)">
          <div class="title center_d">
            <div v-if="item.level==1" class="vip_div " id="vip_img1"></div>
            <div v-if="item.level==2" class="vip_div " id="vip_img2"></div>
            <div v-if="item.level==3" class="vip_div " id="vip_img3"></div>
            <div v-if="item.level==4" class="vip_div " id="vip_img4"></div>
            <div v-if="item.level==5" class="vip_div " id="vip_img5"></div>
            <div v-if="item.level==6" class="vip_div " id="vip_img6"></div>
            <span> TRX-V{{ item.level }}</span>
          </div>

          <div class="info">
            <p>{{ item.info }} </p>
          </div>

          <div class="details">
            <div class="content">
              <span>Time</span>
              <span>{{ item.day }} Day</span>
            </div>
            <div class="content">
              <span>Gain</span>
              <span>{{ item.interest }}% / day</span>
            </div>
            <div class="content">
              <span>Max</span>
              <span>{{ item.max_purchased }} Unit</span>
            </div>
            <div class="content">
              <span>Lucky Draw</span>
              <span>{{ item.wheel }} Due</span>
            </div>
          </div>

          <button @click="openPopup(item.id)"><span>Active Machine</span> <span>{{ item.price }} TRX</span></button>
        </div>
      </div>
    </div>

    <div class="popup" v-if="isPopupOpen">
      <div class="content">
        <h2>Onaylıyor Musun?</h2>
        <div class="info">
          <p>Bu paketi {{ selectedPackage.price }} TRX karşılığında satın almak istiyor musun? Paket süresi bittiğinde {{
            selectedPackage.total_gain }} kazancaksın!</p>
        </div>
        <div class="buttons">
          <button @click="registerPackage(selectedPackage.id)">Evet</button>
          <button @click="closePopup">Hayır</button>
        </div>
      </div>
    </div>

    <div class="success-message" v-if="showSuccessMessage">{{ successMessage }}</div>
    <div class="error-message" v-if="showErrorMessage">{{ errorMessage }}</div>
  </main>
</template>

<script>
import { usePackageStore } from '@/stores/PackageStore'
import PackageService from '@/services/PackageService'

export default {
  data() {
    return {
      packages: null,
      isPopupOpen: false,
      selectedPackage: null,
      showSuccessMessage: false,
      successMessage: '',
      showErrorMessage: false,
      errorMessage: ''
    }
  },
  methods: {
    async openPopup(id) {
      try {
        console.log(id);
        this.selectedPackage = (await PackageService.register_get(id)).data.data
        console.log(this.selectedPackage)
        this.isPopupOpen = true
      } catch(error) {
        if(error.response.status === 400) {
          this.errorMessage = error.response.data.error
          this.showErrorMessage = true;

        setTimeout(() => {
          // 5 saniye sonra başarılı mesajını kapat
          this.showErrorMessage = false;
        }, 5000);
        }
      }
    },
    async registerPackage(id) {
      try {
        await PackageService.register_post(id)
        this.isPopupOpen = false

        this.successMessage = 'Satın alım başarılı!';
        this.showSuccessMessage = true;

        setTimeout(() => {
          // 5 saniye sonra başarılı mesajını kapat
          this.showSuccessMessage = false;
        }, 5000);
      } catch(error) {
        if(error.response.status === 400) {
          console.log(error.response.data)
        }
      }

      
    },
    closePopup() {
      this.isPopupOpen = false;
    },
    getClassName(item) {
      return `vip_div_${item.level}`
    }
  },
  async created() {
    const packageStore = usePackageStore()
    await packageStore.fill()
    this.packages = packageStore.packages
    console.log(this.packages)
  }
}

</script>

<style scoped>
.invest {
  margin: 1rem;
  height: calc(100% - 2rem);
  background: rgb(51, 51, 51);
  overflow: scroll;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.invest .headline {
  padding: 1rem;
  font-weight: 900;
  font-size: 1.25rem;
  background: linear-gradient(to right, #7c7c7c, #000000);
  border-radius: 1rem;
  text-align: center;
}

.invest .information {
  padding: 1rem;
  font-weight: 500;
  font-size: 1.1rem;
  background: linear-gradient(to right, #8a91a1, #1e3c4d);
  border-radius: 1rem;
  position: relative;
}

.invest .information .head {
  position: absolute;
  background: linear-gradient(to right, #f09819, #edde5d);
  top: -1rem;
  left: 25%;
  width: 50%;
  height: 2rem;
  font-size: 0.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px double black;
  clip-path: polygon(0% 15%, 20% 20%, 15% 0%, 85% 0%, 80% 25%, 100% 15%, 100% 85%, 80% 80%, 85% 100%, 15% 100%, 20% 80%, 0% 85%);
}

.invest .information .star {
  position: absolute;
  width: 50px;
  height: 50px;
  background: linear-gradient(to right, #ede574, #e1f5c4);
  top: calc(-25px + 1rem);
  right: calc(-25px + 1rem);
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

.invest .packages {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.center_d{
  display: flex;
  align-items: center;
  justify-content: start;
}
.vip_div{
  width: 3em;
  height: 3em;

}
#vip_img1{  background: url('@/assets/images/vip1.png') center/contain no-repeat;}
#vip_img2{  background: url('@/assets/images/vip2.png') center/contain no-repeat;}
#vip_img3{  background: url('@/assets/images/vip3.png') center/contain no-repeat;}
#vip_img4{  background: url('@/assets/images/vip4.png') center/contain no-repeat;}
#vip_img5{  background: url('@/assets/images/vip5.png') center/contain no-repeat;}
#vip_img6{  background: url('@/assets/images/vip6.png') center/contain no-repeat;}

.vip_div_1{  background-image: linear-gradient(to right,#fcf9d2,#f1f5ce,#e5f1ca,#dfeec8,#d6eac7,#d0e8c6,#d1e8c6,#e6f1c7)!important;;}
.vip_div_2{  background-image: linear-gradient(to right,#f6f4f7,#f3edf3,#ede5ee,#e3d6e5,#dfd2e2,#d7c3db,#cfbad6,#c6accb,#d1bcd8)!important;;}
.vip_div_3{  background-image: linear-gradient(to right,#fcf9ee,#fbf0df,#fae6cf,#fbdcba,#f7cfaa,#f7d2b1,#f7d8b8,#f5c7a2,#f9c497,#f7c49b)!important;}
.vip_div_4{  background-image: linear-gradient(to right,#4f300e,#7b5c24,#6f5119,#926f2a,#b38c2f,#cfa638,#dbb33a,#e4ba3f,#f1c645,#f1c643)!important;;}
.vip_div_5{  background-image: linear-gradient(to right,#163fcf,#1a3cd0,#3d39b2,#3a38b4,#703388,#603595,#5c3894,#9a2c6b,#9c2d67,#962f6a,#a5305b,#ac2a59,#ab2b59)!important;;}
.vip_div_6{  background-image: linear-gradient(to right,#fcf9d2,#f1f5ce,#e5f1ca,#dfeec8,#d6eac7,#d0e8c6,#d1e8c6,#e6f1c7)!important;;}
.invest .packages .package {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(to right, #acb6e5, #86fde8);
  padding: 1rem;
  border-radius: 1rem;
}

.invest .packages .package:nth-child(1) {
  background: #838282;
  color: #fff;
}

.invest .packages div.package:nth-child(2) {
  background: #838282;
}

.invest .packages div.package:nth-child(3) {
  background: #838282;
}

.invest .packages div.package:nth-child(4) {
  background: #838282;
}

.invest .packages div.package:nth-child(5) {
  background: #838282;
}

.invest .packages .package .title {
  font-size: 1.75rem;
  border-bottom: 5px double black;
  font-weight: 900;
}

.invest .packages .package .info {
  font-weight: 300;
  font-size: 0.85rem;
  background: palegoldenrod;
  border-radius: 1rem;
  padding: 1rem;
  background: linear-gradient(to right, #b79891, #94716b);
}

.invest .packages .package .details {
  display: flex;
  flex-direction: column;
  gap: 0.50rem;
  width: 100%;
  padding: 1rem;
}

.invest .packages .package .details .content {
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  gap: 1rem;
  border-bottom: 1px solid black;
  padding: 0.33rem;
}

.invest .packages .package button {
  width: calc(100% - 0.66rem);
  padding: 0.33rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.33rem;
  font-size: 1.1rem;
  outline: none;
  border: none;
  border-radius: 1rem;
  background: #200c2c;
  color: #fff;
  border: 1px solid #fff;
  transition: 1s ease-in-out all;
}

.invest .packages .package button:hover {
  color: #fbc7d4;
  border: 1px solid #fbc7d4;
  background: #fff;
}

.popup {
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.541);
  width: 100%;
  height: calc(100vh - 125px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup .content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 3rem;
  background: black;
  color: #fff;
  padding: 1rem;
  border-radius: 1.25rem;
}

.popup .content .buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.popup .content .buttons button {
  font-size: 1.15rem;
  border-radius: 1.5rem;
  padding: 0.33rem;
  text-align: center;
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