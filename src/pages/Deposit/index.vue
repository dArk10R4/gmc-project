<template>
  <main>
    <div class="depositBox">
      <!-- balance bar start  -->
      <div class="balanceBar" style="margin-top: 20px;">
        <div class="icon">
          <div><img src="@/assets/icons/trox.png" width="30" alt="" /></div>
          <div>
            <h4>Trx</h4>
          </div>
        </div>
        <div class="balance" v-if="user">
          <p>Balance <span> {{ user.balance_r }} </span> <ion-icon name="chevron-forward-outline"></ion-icon></p>
        </div>
      </div>
      <!-- balance bar end -->
      <div class="header" style="width: 90%; margin: 10px auto; border-radius: 5px;">
        <p class="text-color">{{ translate('deposit').value[0] }}</p>
      </div>
      <!-- network bar start  -->
      <div class="networkBar" @click="makeDeposit">
        <div class="text">
          <h4>{{ translate('deposit').value[1] }}</h4>
        </div>
        <div class="rightIcon">
          <p><ion-icon name="chevron-forward-outline"></ion-icon></p>
        </div>
      </div>
      <div class="deposit_modal" v-if="depositAvaliable">
        <div class="deposit">
          <h2>{{ translate('deposit').value[2] }}</h2>
          <form @submit.prevent="sendDepositRequest">
            <div class="form-item">
              <label for="amount"><span>{{ translate('deposit').value[3] }}</span></label>
              <input ref="amountInput" type="number" v-model.number="amount" min="10">
            </div>

            <button type="submit">{{ translate('deposit').value[4] }}</button>
          </form>
        </div>
      </div>
      <!-- network bar end -->
      <div class="header" style="width: 90%; margin: 10px auto; border-radius: 5px;">
        <p class="text-color">
          <ion-icon name="alert-circle-outline"></ion-icon>{{ translate('deposit').value[5] }} 
        </p>
      </div>
      <!-- deposit addres start -->
      <div class="addres" style="width: 90%; margin: auto;">
        <div class="addresBox">
          <div class="depositheader" style="margin-top: 50px;">
            <p class="text-color">Deposit Addres (Tron(TRC20))</p>
          </div>
          <div class="copyAddres">
            <div>
              <p style="font-size:12px;">TFkWxysMfnDE2zJKwWnTxAzfxuhSRfptGn</p>
            </div>

            <div>
              <button ref='copyButton' @click="copy">Copy</button>
            </div>
          </div>
        </div>
      </div>
      <!-- deposit addres end -->
      <div class="img-send text-div">
        <label for="img-send"><span style="color: black;">Send Decont: </span></label>
        <input type="file" ref="image" class="text-color">
      </div>
      <br><br>
      <div class="text-div">
        <p class="text-color">{{ translate('deposit').value[6] }}</p><br>
        <p id="text-color">{{ translate('deposit').value[7] }}</p> <br>
       
      </div>
    </div>
    <!-- deposit end -->
        <div class="success-message" v-if="showSuccessMessage">{{ successMessage }}</div>
        <div class="error-message" v-if="showErrorMessage">{{ errorMessage }}</div>

        <div class="center ">
          <router-link to="/deposithistory" >
            <button id="historyBtn" >go to deposit</button>
          </router-link>
        </div>
  </main>
</template>
<script>
import { useUserStore } from '@/stores/UserStore'
import { ethers, isError } from 'ethers';
import { useLocaleStore } from '@/stores/LocaleStore';
import { computed, onMounted } from 'vue';
import PaymentService from '@/services/PaymentService'
export default {
  setup() {
    const store = useLocaleStore();

    // Initialize locale
    onMounted(() => {
      store.initializeLocale();
    });

    const translate = (key) => computed(() => store.translate(key)).value;

    return {
      translate,
    };
  },
  data() {
    return {
      user: null,
      amount: 10,
      depositAvaliable: false,
      showSuccessMessage: false,
      successMessage: '',
      showErrorMessage: false,
      errorMessage: '',
    }
  },
  methods: {
    async copy(){
      try {
        await navigator.clipboard.writeText('TFkWxysMfnDE2zJKwWnTxAzfxuhSRfptGn');
        this.$refs.copyButton.innerText = "copied";
        this.$refs.copyButton.disabled = true;
        setTimeout(()=>{
          this.$refs.copyButton.innerText = "copy";
        this.$refs.copyButton.disabled = false;
        },2000)
      } catch (e) {
        console.log(e)
      }
    },
    makeDeposit() {
      this.depositAvaliable = !this.depositAvaliable
      console.log(this.amount)
    },
    async payDeposit() {
      try {
        const ABI = '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"stop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stopped","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"start","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_addressFounder","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]'
        const provider = new ethers.BrowserProvider(window.ethereum)

        const contract = new ethers.Contract(
          '0x85EAC5Ac2F758618dFa09bDbe0cf174e7d574D5B',
          ABI,
          await provider.getSigner(),
        )

        const numberOfTokens = ethers.parseUnits(this.amount.toString(), 8)

        const transferResult = await contract.transfer('0x693F39ef7161EbA22293E3b9DF2e883ED06233Ff', numberOfTokens)

        const params = {
          amount: this.amount,
          tx_hash: transferResult.hash,
        }

        // await paymentStore.deposit(params)

        // closeButton.value.click()

        this.amount = null
      } catch (error) {
        console.log(error)
      }
      },
      async sendDepositRequest() {
        const allowedFormats = ['image/jpeg', 'image/jpg', 'image/png'];
        let imageInput = this.$refs.image;
        this.amount

        if (this.amount<10) {
          return;

        }
        console.log(imageInput.files.length)
        console.log(!((imageInput.files.length)>0 && allowedFormats.includes(imageInput.files[0].type)))
        if (!((imageInput.files.length)>0 && allowedFormats.includes(imageInput.files[0].type))) {


          this.errorMessage =this.translate('Deposit').value[0] ;
          this.showErrorMessage = true;

          setTimeout(() => {
              // 5 saniye sonra başarılı mesajını kapat
              this.showErrorMessage = false;
          }, 5000);
          return
        }
        const formData = new FormData();
        formData.append('image',imageInput.files[0]);
        formData.append('amount',this.amount);
        try {
				  const data = (await PaymentService.deposit(formData)).data;
          this.successMessage = data.message
            this.showSuccessMessage = true;

            setTimeout(() => {
              // 5 saniye sonra başarılı mesajını kapat
              this.showSuccessMessage = false;
            }, 5000);
        } catch (error) {
          if (error.response.status === 400) {
            this.errorMessage = error.response.data.error
            this.showErrorMessage = true;

            setTimeout(() => {
              // 5 saniye sonra başarılı mesajını kapat
              this.showErrorMessage = false;
            }, 5000);
          }
        }
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
.center{text-align: center;}
main {
  color: #fff;
}
.depositBox{
}

.currencyBar .currency {
  display: flex;
  justify-content: center;
  align-items: center;
}
 
.currencyBar .currency ul li {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #222;
  margin: 2%;
}

.currencyBar .currency ul li .coin {
  width: 55px;
  height: 40px;
  border-radius: 5px;
  background-size: 100% 100%;
  background-position: center;
}

.networkBar .text {
  display: flex;
  align-items: center;
  color: #fff;
}

.balanceBar,
.networkBar {
  display: flex;
  width: 90%;
  margin: auto;
  background: #222;
  padding: 10px;
  color: #fff;
  border-radius: 10px;
}

.icon {
  display: flex;
}

.icon div h4 {
  position: relative;
  color: #fff;
  left: 10px;
  top: 5px;
}

.balance,
.rightIcon {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 5px;
}

.balance .rightIcon {
  color: #ffff;
}

.balance .rightIcon p ion-icon {
  position: relative;
  font-size: 1rem;
  top: 2px;
}

.addresBox {
  width: 100%;
  height: 15vh;
  background: #222;
  border-radius: 15px;
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
.depositheader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7.5vh;
  padding: 20px;
  background-color: #f1f1f1;
  color: #222;
  border-radius: 15px;
}

.copyAddres {
  width: 100%;
  height: 7.5vh;
  justify-content: center;
  align-items: center;
  display: flex;
}

.copyAddres div input {
  padding: 10px;
  width: 70%;
}

.copyAddres div button {
  padding: 11px;
  border: none;
  color: #fff;
  background: #222;
  font-weight: bolder;
  margin-left: 10px;
}

.deposit_modal {
  background: black;
  color: #fff;
  margin: 1.33rem;
  border-radius: 1rem;
  padding: 11px;
}
#text-color{
  color: #ff0000be;
  font-weight: 600;

}
p{    
  font-family:Verdana, Geneva, Tahoma, sans-serif !important;
}
.text-color{  color:#333 ;}
.text-div{padding: 0px 25px;}

#historyBtn{
	padding: 1em 2em;
	margin-bottom: 1em;
	font-weight: 600;
	
}

</style>