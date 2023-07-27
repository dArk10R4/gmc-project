<template>
  <main>
    <div class="business">
      <div class="stats">
        <div class="banner">
          <div class="depozito">
            <span class="amount"><div class="div_icon"></div>25964</span>
            <span class="unit">TRX</span>
          </div>

          <div class="referance">
            <div class="people" v-if="references">
              <span>Sv.1 {{ references.ref1 }}</span>
              <span>Sv.2 {{ references.ref2 }}</span>
              <span>Sv.3 {{ references.ref3 }}</span>
            </div>
            <span>Ref</span>
          </div>

          <div class="quick-links">
            <button @click="copyReferralURL">Copy Referral URL</button>
            <button>
              <RouterLink to="/invest">Buy New Machine</RouterLink>
            </button>
          </div>
        </div>
        <div class="summary">
          <div class="interest-rate">
            <ion-icon name="pulse-outline"></ion-icon>
            <span>{{ totalInterest }} % / day</span>
          </div>

          <div class="active-machine">
            <ion-icon name="git-compare-outline"></ion-icon>
            <span>{{ totalPackages }}</span>
          </div>

          <div class="past-earning">
            <ion-icon name="cash-outline"></ion-icon>
            <span>{{ totalMoney }} TRX</span>
          </div>
        </div>
      </div>

      <div class="active-packages">
        <div class="title">
          <span>Active Packages</span>
        </div>

        <table>
          <thead>
            <th>Name</th>
            <th>Rate</th>
            <th>Money</th>
          </thead>
          <tbody>
            <tr v-for="(item, index) in activePackages" :key="index">
              <td>VIP {{ item.package.level }} - TRX</td>
              <td>{{ item.package.interest }}%</td>
              <td>{{ item.package.price }} TRX</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="passive-packages">
        <div class="title">
          <span>Passive Packages</span>
        </div>

        <table>
          <thead>
            <th>Name</th>
            <th>Rate</th>
            <th>Money</th>
          </thead>
          <tbody>
            <tr v-for="(item, index) in passivePackages" :key="index">
              <td>VIP {{ item.package.level }} - TRX</td>
              <td>{{ item.package.interest }}%</td>
              <td>{{ item.package.price }} TRX</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="success-message" v-if="showSuccessMessage">{{ successMessage }}</div>
      <div class="error-message" v-if="showErrorMessage">{{ errorMessage }}</div>
    </div>
  </main>
</template>

<script>
import PackageService from '@/services/PackageService'
import UserService from '@/services/UserService'
import { RouterLink } from 'vue-router'

export default {
  data() {
    return {
      passivePackages: null,
      activePackages: null,
      totalInterest: 0,
      totalPackages: 0,
      totalMoney: 0,
      references: null,
      referralCode: '',
      showSuccessMessage: false,
      successMessage: '',
      showErrorMessage: false,
      errorMessage: ''
    }
  },
  components: {
    RouterLink
  },
  methods: {
    copyReferralURL() {
    const referralURL = `https://trongmc.com/auth/signup?referral=${this.referralCode}`;
    const textArea = document.createElement('textarea');
    textArea.value = referralURL;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        this.successMessage = 'Referral URL copied to clipboard!'
        this.showSuccessMessage = true;
    } catch (err) {
        this.errorMessage = 'Failed to copy referral URL to clipboard.'
        this.showErrorMessage = true;
    }
    document.body.removeChild(textArea);
    setTimeout(() => {
        this.showSuccessMessage = false;
        this.showErrorMessage = false;
    }, 5000);
}

  },
  async created() {
    this.referralCode = (await UserService.referral()).data.referral
    this.passivePackages = (await PackageService.passive_packages()).data
    this.activePackages = (await PackageService.active_packages()).data
    Object.values(this.activePackages).forEach(item => {
      this.totalInterest += item.package.interest;
    });
    this.totalPackages = Object.keys(this.activePackages).length
    Object.values(this.activePackages).forEach(item => {
      this.totalMoney += item.package.price;
    });
    try {
      this.references = (await UserService.reference()).data
    } catch (error) {
      console.log(error.response.data)
    }
  }
}
</script>

<style scoped>
.business {
  margin: 1rem;
  background: #00ccff;
  /* background-image: url('@/assets/images/habesli.jpg'); */
  background-image: linear-gradient(to right bottom , #8478aa ,#7948ab,#e6b8e5,#edc7df,#f2c0c8,#f0b38e,#f3999c,#a420ca,#e02ec4,#f167df,#f36ddd,#f172dd,#7b64bb,#f222e1,#f12ad8,#fd3745,#f332c5,#e544b5,#f5a89e,#eeadcb,#fdbbac,#8f6de5,#77b8f7,#347be8,#348eff,#ef3ef6,#c721fe,#e356f0,#af98cf,#a3afc8,#9790c6,#a3c4e6,#5e76e0,#544ed6,#8560c9,#9998ed,#e38cd2,#ad96df,#e2bddf,#ffeffd,#a090b8);
  height: calc(100% - 2rem);
  border-radius: 1.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: scroll;
}

.business .stats {
  display: flex;
  flex-direction: column;
  background: palegreen;
  border-radius: 1.5rem;
}

.business .stats .banner {
  background: #99cccc;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
}
.div_icon{
  display: inline-block;
  object-fit: contain;
  width: 15px;
  height: 15px;
  margin-right: 3px;
  background: url('../../assets/icons/trox.png') center/cover ;
}

.business .stats .banner .depozito {
  width: calc(50% - 0.5rem);
  background: #ccffff;
  border-radius: 1.5rem;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  color: #000000;
}

.business .stats .banner .referance {
  width: calc(50% - 0.5rem);
  background: #ccffff;
  border-radius: 1.5rem;
  padding: 0.75rem;
  display: flex;
  flex-direction: column-reverse;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  color: #000000;
}

.business .stats .banner .referance .people {
  display: flex;
  flex-direction: column;
  gap: 0.33rem;
}

.business .stats .banner .referance .people span {
  border-bottom: 1px solid #ddd;
}

.business .stats .banner .quick-links {
  flex-basis: 100%;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.business .stats .banner .quick-links button {
  font-weight: 500;
  border-radius: 1.5rem;
  outline: none;
  border: none;
  background: pink;
  padding: 0.33rem;
  border: #fff 1px solid;
  color: #fff;
  transition: 0.5s ease-in-out all;
}

.business .stats .banner .quick-links button:hover {
  background: #fff;
  color: pink;
  border: pink 1px solid;
}

.business .stats .summary {
  background: #00ccff;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 0.33rem;
}

.business .stats .summary div {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 33.33%;
  padding: 0.5rem;
}

.business .stats .summary div ion-icon {
  font-size: 1.75rem;
  text-align: center;
  width: 100%;
  border: 1px solid #fff;
  border-radius: 3rem;
}

.business .stats .summary div span {
  font-size: 0.75rem;
  width: 100%;
  text-align: center;
}

.business .active-packages .title,
.business .passive-packages .title {
  padding-bottom: 1rem;
  text-align: center;
  color: #F9F295;
  font-size: 1.19rem;
  font-weight: 700;
}

.business .active-packages table,
.business .passive-packages table {
  overflow: scroll;
  width: 100%;
  color: #F9F295;
  text-align: center;
}

.business .active-packages table,
.business .active-packages table th,
.business .active-packages table td,
.business .passive-packages table,
.business .passive-packages table th,
.business .passive-packages table td {
  border: 1px solid #F9F295;
}
</style>