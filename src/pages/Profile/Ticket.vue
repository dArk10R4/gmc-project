<template>
    <main>
        <div class="lottery" v-if="lotteries">
            <div class="tikcetdivi" v-for="lottery in lotteries" :key="lottery.id">
                <div class="ticket">
                    <img :src="lottery.image"
                        alt="">
                    <p>Ticket Level {{ lottery.digit - 6 }}</p>
                    <p>Avaliable Tickets <br> {{ lottery.amount }}</p>
                    <p>Price <br> {{ lottery.price }} TRX</p>
                </div>

                <div class="butticket">
                    <a href="#">BUY TICKET {{ lottery.id }}</a>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import LotteryService from '@/services/LotteryService'

export default {
    data() {
        return {
            lotteries: null,
        }
    },

    async created() {
        this.lotteries = (await LotteryService.lotteries()).data
        console.log(this.lotteries)
    }
}
</script>

<style scoped>
main {
    color: #fff;
}

.lottery {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem;
    border: 1px solid black;
}

.tikcetdivi img {
    width: 140px;
}

.ticket {
    display: flex;
    gap: 1rem;
}

.tikcetdivi {
    display: flex;
    flex-direction: column;
    background-image: url(https://images.unsplash.com/photo-1595026677025-0eff2b5b3a16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80);
    width: 90%;
    margin: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 20px;
}

.butticket a {
    text-decoration: none;
    padding: 20px;
    margin-top: 15px;
    border-radius: 10px;
    color: white;
    background-color: blue;
}

.butticket {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>