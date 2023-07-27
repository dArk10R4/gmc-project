<template>
	<main>
		<div class="withdrawBox" v-if="user">
			<div class="withdraw">
				<div class="headerwithdraw">
					<h1>Withdraw funds</h1>
				</div>
				<div class="text">
					<p>	Please make sure you enter the correct Tron (TRC20) address, withdrawals will take place within 6 hours.  Withdrawal commission 2%. Minimum Withdrawal is 10 trx, maximum Withdrawal is 100,000 trx.</p>
					<br>
					<p id="w_text">(The withdrawal is made between 08:00-20:00.) The transactions you see work with Swedish time (GMT+2).</p>
				</div>
				<div class="balanceBox article_center">
					<div class="balance">
	
							<div class="total">
								<div class="article_center">
									<img src="@/assets//icons//trox.png" id="total_img" alt="">
									<span>{{ user.balance_r }} TRX</span>
								</div>
								
								<h3>Withdrawable amount</h3>
							</div>
		

					</div>
				</div>
				<div class="adressWriteBox">
					<div class="adressWrite">
						<form @submit.prevent="sendWithdrawRequest">
							<div class="adress">
								<input type="text" v-model="withdraw_adress" placeholder="Write Your Address">
							</div>
							<div class="sendBtn">
								<button type="submit">Withdraw funds</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>

		<div class="success-message" v-if="showSuccessMessage">{{ successMessage }}</div>
		<div class="error-message" v-if="showErrorMessage">{{ errorMessage }}</div>
	</main>
</template>
<script>
import { useUserStore } from '@/stores/UserStore'
import PaymentService from '@/services/PaymentService'

export default {
	data() {
		return {
			user: null,
			withdraw_adress: '',
			showSuccessMessage: false,
			successMessage: '',
			showErrorMessage: false,
			errorMessage: ''
		}
	},
	methods: {
		async sendWithdrawRequest() {
			const params = {
				wallet: this.withdraw_adress,
			}

			try {
				const data = (await PaymentService.withdraw(params)).data
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
		// console.log(this.user.balance_f)
		console.log(this.user)
	}
}
</script>
<style scoped>
main {
	background: black;
	color: #fff;
}

.withdrawBox {
	width: 100%;
	display: flex;
	justify-content: center;
}

.widthdraw {
	width: 70vw;
}

.text {
	margin: 20px;
	font-family: Verdana, Geneva, Tahoma, sans-serif;line-height: 1.5em;
	
}
#w_text{
	color: #ff4548;
	font-weight: 600;
}
#total_img{
	width: 25px;
	margin-right: 15px;
}
.article_center{
	display: flex;
	justify-content: center;
	align-items: center;
}

.balanceBox {
	display: flex;
	align-items: center;
	width: 90%;
	margin: auto;
	padding: 1em;
	height: 20vh;
	background-image: url('https://static.vecteezy.com/system/resources/thumbnails/007/278/150/small/dark-background-abstract-with-light-effect-vector.jpg');
	background-size: 100% 100%;
	background-position: center;
}

.balance {
	text-align: center;
	color: #fff;
	width: 50%;
}

.headerwithdraw {
	text-align: center;
	font-size: small;
}

.balance span {
	font-size: 1.8rem;
}

.adressWriteBox {
	width: 95%;
	margin: auto;
	display: flex;
	justify-content: center;
}

.adressWrite {
	width: 100%;
	height: 30vh;
	margin: 10px;
	border: 1px solid #333;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	background-image: url('https://static.vecteezy.com/system/resources/thumbnails/007/278/150/small/dark-background-abstract-with-light-effect-vector.jpg');
	background-size: 100% 100%;
	background-position: center;
}

.adressWrite form {
	padding: 5px;
	margin: 5px;
}

.adressWrite form input {
	padding: 10px;
	margin: 5px;
	text-align: center;
	width: 200px;
	border-radius: 5px;
	border: none;
}

.adressWrite .adress,
.adressWrite .sendBtn {
	width: 100%;
	display: flex;
	justify-content: center;
}

.adressWrite form button {
	margin: 10px;
	padding: 10px;
	border: none;
	background: #ff9200;
	border-radius: 5px;
	color: #fff;
	width: 250px;
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