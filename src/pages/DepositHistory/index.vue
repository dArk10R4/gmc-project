<template>
    <main>
        <div id="title" >
			<button id="historyBtn" onclick="history.back()">˂</button>
            <p id="textW">{{ translate('deposit_H').value[0] }}</p>
        </div>
        <p style="color:black; text-align: center; padding: 1em;" v-if="historyData.length===0" >History is empty</p>
        <div id="historyText" v-if="historyData.length!=0">
            <table class="table">
                <thead >
                    <tr class="center">
                        <th >{{ translate('deposit_H').value[1] }}</th>
                        <th class="c_green">{{ translate('deposit_H').value[2] }}</th>
                        <th class="c_purpl">{{ translate('deposit_H').value[3] }}</th>
                    </tr>
                </thead>
                <tbody >
                    
                    <tr class="center" v-for="(item, index) in historyData" :key="index">
                        <td  >{{ item.date.slice(0,10) }}</td>
                        <td  class="c_green">+{{item.amount}}</td>
                        <td class="c_purpl">{{ item.status==0? this.translate('deposit_H').value[4] :item.status==1?this.translate('withdraw_H').value[5]:this.translate('withdraw_H').value[6]}}</td>
                    </tr>  
                    
                    
                </tbody>
                </table>
        </div>
        
    </main>
</template>

<script >
import PaymentService from '@/services/PaymentService';
import { useLocaleStore } from '@/stores/LocaleStore';
export default {
    computed: {
    translate() {
      const store = useLocaleStore();
      store.initializeLocale();
      return (key) => store.translate(key);
    },
    },
    data() {
    return {
      historyData:[],
      showSuccessMessage: false,
      successMessage: '',
      showErrorMessage: false,
      errorMessage: '',
    }
  },
    async created() {
      let data = (await PaymentService.getDepositData()).data.data;
      console.log(data)
      this.historyData = data;
    }
}
</script>
<style scoped>
    #title{
        width: 100%;
        background: #3AFF09;
        color: #fff;
        padding: 1em 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #historyBtn{
        background: transparent;
        border: none;
        color: #fff;
        width: 35%;
        padding-left: .5em ;
        font-size: 30px;
        text-align: start;

    }
    #textW{
        width: 65%;
        text-align: start;
    }
    #historyText{
        width: 80%;
        margin:1em auto;
        color: #000;
        border: 1px solid silver;
        box-shadow: 0px 0px 10px silver;
    }
    .table{
        width: 100%;
        border-collapse: collapse;

    }
    th,td{  border: .1px solid silver;       }
    .center{  text-align: center;}
    .c_green{  color:  #3AFF09;;}
    .c_purpl{color:  #315db1;}





</style>