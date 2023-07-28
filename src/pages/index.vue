<template>
    <main>
        <div class="main">
            <div class="wrapper">
                <!--
        <h3>Wallet Balance</h3>
        <i class="material-icons nav__icon">account_balance_wallet</i>
        <p>115--TRON </p>
        -->
                <div class="flip-card">
                    <div class="front card" style="border-radius: 30px;">
                        <ion-icon name="accessibility-outline"></ion-icon>
                        <h3>{{ translate('home').value[0] }}</h3>
                    </div>
                    <div class="back card">
                        <h3>TRX <img src="https://s2.coinmarketcap.com/static/img/coins/200x200/1958.png" alt=""></h3>
                        <span v-if="user" class="num">{{(user.balance_f + user.balance_r).toFixed(3)}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="morqueeediv">
            <marquee><ion-icon name="accessibility-outline"></ion-icon>TRON GMC---&copy; 2023</marquee>
        </div>
        <div class="mainbottom">
            <div class="maindiv">
                <div class="main1">
                    <div class="maininterior">
                        <ion-icon name="accessibility-outline"
                            style="background-color: rgb(58, 255, 9); border-radius: 5px; padding: 10px;"></ion-icon>
                        <RouterLink to="/deposit">{{ translate('home').value[1] }}</RouterLink>
                    </div>
                    <div class="maininterior">
                        <ion-icon name="accessibility-outline"
                            style="background-color: rgb(194, 0, 0); border-radius: 5px; padding: 10px;"></ion-icon>
                        <RouterLink to="/withdraw">{{ translate('home').value[2] }}</RouterLink>
                    </div>
                    <div class="maininterior">
                        <ion-icon name="accessibility-outline"
                            style="background-color: rgb(217, 255, 0); border-radius: 5px; padding: 10px;"></ion-icon>
                        <RouterLink to="/reference">{{ translate('home').value[3] }}</RouterLink>
                    </div>
                </div>
                <div class="main2">
                    <div class="maininterior">
                        <ion-icon name="accessibility-outline"
                            style="background-color: rgb(194, 0, 184); border-radius: 5px; padding: 10px;"></ion-icon>
                        <RouterLink to="/about">{{ translate('home').value[4] }}</RouterLink>
                    </div>
                    <div class="maininterior">
                        <ion-icon name="accessibility-outline"
                            style="background-color: rgb(92, 92, 92); border-radius: 5px; padding: 10px;"></ion-icon>
                        <RouterLink to="/settings">{{ translate('home').value[5] }}</RouterLink>
                    </div>
                    <div class="maininterior">
                        <ion-icon name="accessibility-outline"
                            style="background-color: rgb(0, 181, 194); border-radius: 5px; padding: 10px;"></ion-icon>
                        <!--<RouterLink to="/support">Support</RouterLink>-->
                        <a href="https://t.me/+24Hg5OYpZk9mMWQx">{{ translate('home').value[6] }}</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="cark">
            <div class="carkdivi">
                <div class="carxolan">
                    <a href="#"><ion-icon name="medical-outline" style="font-size: 40px;"></ion-icon>
                        <RouterLink to="/lucky">{{ translate('home').value[7] }}</RouterLink>
                    </a>
                </div>
                <div class="biletolan">
                    <a href="#"><ion-icon name="medical-outline" style="font-size: 40px;"></ion-icon>
                        <RouterLink to="/profile/ticket">{{ translate('home').value[8] }}</RouterLink>
                    </a>
                </div>
            </div>
        </div>

        <div v-if="user" class="wallet2">
            <div class="wallet2div1">
                <h3>{{ translate('home').value[9] }}</h3>
                <div class="valet2div2daxili2">
                    <img src="https://cdn-icons-png.flaticon.com/512/3757/3757881.png" alt="">
                    <h3>{{ user.balance_f }} TRON</h3>
                </div>
            </div>
            <div class="wallet2div2">
                <h3>{{ translate('home').value[10] }}</h3>
                <div class="valet2div2daxili2">
                    <img src="https://cdn-icons-png.flaticon.com/512/3757/3757881.png" alt="">
                    <h3>{{ user.balance_r }} TRON</h3>
                </div>
            </div>
        </div>

        <div class="roadmap">
            <h2 style="color: black;">{{ translate('home').value[11] }}</h2>

            <div class="timeline">
                <div class="time">
                    <div class="line"></div>

                    <div class="line2">

                    </div>

                    <ion-icon name="star-outline"></ion-icon>

                    <div class="date">
                        <span>Q3 2023</span>
                    </div>


                    <div class="content">
                        <ul>
                            <li><span>{{ translate('home').value[12] }}</span></li>
                            <li><span>{{ translate('home').value[13] }}</span></li>
                            <li><span>{{ translate('home').value[14] }}</span></li>
                            <li><span>{{ translate('home').value[15] }}</span></li>
                            <li><span>{{ translate('home').value[16] }}</span></li>
                            <li><span>{{ translate('home').value[17] }}</span></li>
                            <li><span>{{ translate('home').value[18] }}</span></li>
                            <li><span>{{ translate('home').value[19] }}</span></li>
                        </ul>
                    </div>
                </div>

                <div class="time">
                    <div class="line">

                    </div>

                    <div class="line2">

                    </div>

                    <ion-icon name="star-outline"></ion-icon>

                    <div class="date">
                        <span>Q4 2023</span>
                    </div>

                    <div class="content">
                        <ul>
                            <li><span>{{ translate('home').value[20] }}</span></li>
                            <li><span>{{ translate('home').value[21] }}</span></li>
                            <li><span>{{ translate('home').value[22] }}</span></li>
                            <li><span>{{ translate('home').value[23] }}</span></li>
                            <li><span>{{ translate('home').value[24] }}</span></li>
                        </ul>
                    </div>
                </div>

                <div class="time">
                    <div class="line">

                    </div>

                    <div class="line2">

                    </div>

                    <ion-icon name="star-outline"></ion-icon>

                    <div class="date">
                        <span>Q1 2024</span>
                    </div>

                    <div class="content">
                        <ul>
                            <li><span>{{ translate('home').value[25] }}</span></li>
                            <li><span>{{ translate('home').value[26] }}</span></li>
                            <li><span>{{ translate('home').value[27] }}</span></li>
                            <li><span>{{ translate('home').value[28] }}</span></li>
                            <li><span>{{ translate('home').value[29] }}</span></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        <div class="companiy" style="width: 90%; margin: auto; display: flex;
         justify-content: space-around; align-items: center;">
                <div class="companiesdiv" style="display: flex; justify-content: center;
        align-items: center; flex-direction: column; height: 80px; width: 40%;  background-image: url(https://images.unsplash.com/photo-1595026677025-0eff2b5b3a16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80); border-radius: 20px;">
            <img src="https://s2.coinmarketcap.com/static/img/coins/200x200/1958.png" alt="" style="width: 30px;">
            <h3 style="font-size:1em">{{ translate('home').value[30] }}</h3>
            <p>10.527</p>
        </div>

        <div class="companiesdiv" style="display: flex; justify-content: center;
        align-items: center; flex-direction: column; height: 80px; width: 40%;  background-image: url(https://images.unsplash.com/photo-1595026677025-0eff2b5b3a16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80);border-radius: 20px;">
            <ion-icon name="people-outline" style="font-size: 25px;"></ion-icon>
            <h3 style="font-size:1em">{{ translate('home').value[31] }}</h3>
            <p>6786</p>
        </div>
    </div>
        <div style="color:black;font-weight:700;font-size:1.5em;margin-top:15px;text-align: center;">{{ translate('home').value[32] }}</div>
        <marquee behavior="" direction="" :autoWidth='True' space="500"
            style="height: 60px; background-image: none; background-color: rgb(0, 0, 0);">
             <img src="@/assets/images/s12.png"  alt="">    
             <img src="@/assets/images/simplex.png"  alt=""> 
             <img src="@/assets/images/s9.png"  alt="">
             <img src="@/assets/images/s8.png"  alt="">
             <img src="@/assets/images/s11.png"  alt="">
             <img src="@/assets/images/s6.png"  alt="">
        </marquee>
       <!-- <div class="sponsor">
            <div class="box">
                <img src="@/assets/images/s1.png" alt="">
            </div>

            <div class="box">
                <img src="@/assets/images/s2.png" alt="">
            </div>

            <div class="box">
                <img src="@/assets/images/s3.png" alt="">
            </div>

            <div class="box">
                <img src="@/assets/images/s2.png" alt="">
            </div>

            <div class="box">
                <img src="@/assets/images/s3.png" alt="">
            </div>

            <div class="box">
                <img src="@/assets/images/s6.jpg" alt="">
            </div>

            <div class="box">
                <img src="@/assets/images/s7.jpg" alt="">
            </div>

            <div class="box">
                <img src="@/assets/images/s8.jpg" alt="">
            </div>

            <div class="box">
                <img src="@/assets/images/s9.jpg" alt="">
            </div>

            <div class="box">
                <img src="@/assets/images/s10.jpg" alt="">
            </div>

            <div class="box">
                <img src="@/assets/images/s11.jpg" alt="">
            </div>

            <div class="box">
                <img src="@/assets/images/s12.jpg" alt="">
            </div>
        </div>-->
    </main>
</template>
<script>
import { useUserStore } from '@/stores/UserStore'
import { RouterLink } from 'vue-router';
import { useLocaleStore } from '@/stores/LocaleStore';
import { computed, onMounted } from 'vue';
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
           
        }
    },
    components: {
        RouterLink
    },
    async created() {
        const userStore = useUserStore()
        await userStore.fill()
        this.user = userStore.user
    },

    
}
</script>
<style scoped>
main {
    color: #fff;
}

select {
    padding: 9px 15px;
}

.walletbalance i {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    font-size: 75px;
    color: rgb(255, 255, 255);
    position: absolute;
    left: -5px;
}

.header img {
    width: 60px;
}

.wallet2div1 img {
    width: 40px;
    height: 40px;
}

.wallet2div1 {
    display: flex;
    align-items: center;
    color: #Fff;
}

.header {
    display: flex;
    width: 100%;
    height: 70px;
    background-color: hsl(240, 95%, 9%);
    align-items: center;
    justify-content: space-around;
    color: #ffffff;
    background-image: url(https://images.unsplash.com/photo-1595026677025-0eff2b5b3a16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80);
}

.header a {
    text-decoration: none;
    padding: 17px;
    font-size: large;
    background-color: #001aff;
    color: #ffffff;
    border-radius: 5px;
    background-image: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAQDxAPDw8PEA8NDw8PDw8NDg8NFREWFhURFRUYHSggGBolGxUVITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHSUtKy0tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALEBHAMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAACAwQBAAUG/8QAOxAAAgECAwQHBgUDBAMAAAAAAAECAxESITEEQVFxIjJhcoGRsQUTUrLB0UJioeHwosLxIzOCkhRzs//EABkBAAMBAQEAAAAAAAAAAAAAAAECAwQABf/EACURAAMAAgMAAQQCAwAAAAAAAAABAhESAyExQRMyUWGB8CIjQ//aAAwDAQACEQMRAD8A8+qSVCusSTQvGzS0TyFStvz7B00KaNsEqNyto75X6X4c7I6m1u0WVtLdltwK1fJfU1wvno+K1Nu22CNDosdBkqm11tPiWnjwHwZSSLKYMfCRLFjoscm0VRkOhIj94lm3b78A4SlLjFf1P7evIAupfGavZ5vVJa8+wtnOGFWUrr/czTTlZbt+R5lKy0/y+0bSnnLvL5YjzyYWBXGcFsJ30GxkRrjo/wCajYz45du4jkGCpSDUidSDUgZBgfiNxCcR2I7IGhuIbRlbXTt3+BLj8fQF1AqsMGMnqbZUg7e7uuir31eW5nmykLrVfSPyoB19zzXk1yYt0GZ6QxzBcxMnvTut/Fc0KdQhdF5nJQ5mYyV1DPeGS6NEwVYzHMTTvLPJJayeUV+/ZqH/AORGPUzfxyWf/Fbubz5GS6NMyehsslG3vf8Ab19285SXGK/Dzy8dBnteUZVKioLCsUk6f42755/iV936bzxJVXm222823m2xm3T/ANSp/wCyfzMg76wWSBbFyYbr4uvd/nXX8fi8fMXUhbNPFHit3NbhEw4FyFNBtgjpsDQG0UWs5dFbk+s+S+rIKs9yVl5t82W+0q7nUnKTvKU5Nvi7nnzNfHIKYqQsZIBm6EQoGxqNsckaZJNBxOULZxy7Pwv7eByGRKJiajKDu7NNSe7W/J7wsbeUM/zPqLl8Xh5mxquKbWq7ExspXZVuNf2doZSp2d3eUuL3di4FMRURsSDsGg6LCoPOfeXyRFxCoaz76+SIuwNCuLGRYmIyLF2A4GLLTyKKUHLRPJXfYuJMmU0NslC+F2xdF9qe4pDTfZNzhdAtmOQFSdxbkLVLPQHA1zAlMVKYuUxcnajqtTPwj8qESqC6tT0j6IROoJVDRPSH++tmnZ8VkznWUtei/iSyfNfbyIpVBbqkKovMHpKlJ6Jvg49JPxAlOMdek/hT6K5ta+HmL2b2jOFOrCMrRqKKmuKuRSrEeVzhYNEyXT2ly1emi0SXYtwPvSJVTVUMdFkix1B211P9Sp35/MzzveDtqqdOffn8zJNDjfeGxqtO6dv5oSe8NxnanFmKMvyv+l/b05GujLg/VPk95Gpnr+y/a1WnBxpzcY4m7LjZDTK+TvfPTwtofSl3pepPIbX60u8/UUzfxw0Z2xbBYxoxI1whAbZLm/ockXT2NqmpZdaScbrGlZZuOqRLYu5c+hwYkMijIoZFCujlIM10WUxQuUcmPjEm+QfQKKGRR0YjIxJvkO0NijtnWdTvr/5wG04rV2SWbbySRQ6EY2eOMvfdOKV00lGKtnv6LDLbTZ30xcQ0YkFYXck5NTBm9OaNAqvTvIdUSqQ3IXKZsmJmxthdTZTETmdOQq52c9HKTKtT0XoTzqFXtKh7tpYozvFSvF3SutOZ5k5i8qcvDG40nKaDnUFOqKnMU5mWmXlFSq5S8PUX70R7zJ+HqBjJUUlFaqhKqRKYSmSwULfeDq9Tpz70vVkezpydlv45Jdre5FftKi6dScW4y6UrShJShJX3NDribWwcrwFTCUyVTDUgfTFyUqRXsj6L5/RHnxZdsT6L5/RHPjZyrskq9aXefqLY+dNuTSV82+SvqD0Y8Jy/oX39OZ6umDLsBCk3m7Rj8T05Li+R2NLqXX5n1vD4f5mZOTbu3fdyXBcEANgZMJTYaaeuvFfVCwogpsohmC33WgcUZB2/mTHRSfZ2biFVgqpMw5D4RMhTHKNiFUUUGxibi3RWJ+SXN7vU1Qv2LgtfMfCCSsslwRF2NqLp0M7zeJrNLSEX2Lj2v9CiaUlZpNcHmckGkBcjFYhQlHS848G+muTevj5h05qWm7JrRp8Gtw2wupSTzzTWkllJfddjyKTRGkaxVZ6d5HOo49fNfGll/wAlu56cga2ai1piiXlkak6TETYVaollq9yWbZPNN9b/AKrTxe8fJJoCdThn6CJSsMqMlqSA6CpMq1SWcwqkiechKsokDOQuUzJSEyZFsdDMevgDiA4givsddDlMNO2vktfHgTqfDz3nKQUglirPTRcFoMhXfg9U80+ZFGQyMikoVsujZ6ZPg3l4P7mrLJ5NbnkyWLKadXdJYl5NcmWUE3Q6LLtjfRfP6IijTvnF4lq90lzX1Ltjj0fH6IrPGJsM26SnKXu1hi5NqnvXj+L1IGFUeb5v1N95frZ/mXW/f+Zmuu2Z5fQpmBzhbNZrivrwAuI0VTOCiCbFk6ReWOiOpgQpZJyeGL03ylyW/noMVXdFYV5yfN/YzWXk9L2fKMZL3kca3xvb9TJ2vl5cCShLNDISM9t4wXT6KIjYiIyGxkZmcNQaFphKQEIwwWZcTKu3lBYtzk+ovHe+xfoVklQdSairtpLiwaMoZtwklLKGeH/UeksNsvXsFqlnik8UuL0XdW717WL2mXV78TVxXq8ka8wBKcU8NsMnxd8T4qX4vUVUYdazyea4PMkneOnSXBvpLk9/j5hbyI+wajJqjGOonp4rRrmhFRitnJCajJpsdNiJkmyiQqbFMOTAZNsdFuz1KSpzU4t1HbBJPJcbreQTZzYJSuXZJfg6Yw218nXCTMSOsdKCw4sZFikMgaYROh8B8BFNFMElrm+CeXi/saJkhTKdmi73WVvxXsl4n0nsza9nULVKPvZYneam6SeS3L1PmVNvXRaJZJckXbLLo+P0Rojojfa7JJyzfNgXBnLN82ZiCwSMjNrNOwSal+V/0v7fzQRiOjIBVF3/AIM7XwtR+J9Xz0FKajp0n8TXRXJP1fkUz9pzdCNK/QU5yS/NaOZ5uIbnmFjUpxt/JS6jbu223q27thwkTKQcZGKpNEsv2aXSX83BwkT7JLpx/m46EzNUFk+i+MxikRRqDY1CL4ztiyEh9SDSTs8845aohp1bFNTbZSSjKTajlFPcuwaYWOztgGr9bT4Vp48fQLEJxmOYVBGmMlIl2qfV78Q5TJtpl1e/EokSbGTkTzkFOQicjmAVWSfY9zWTQi735rivqtw2bFqpZiZWexkgdsoyhk07tKSWmT0fIikuPluLtr2+dbOpJyaxRTe6Kk7IikT5nO3+Hg0J4W3oqQDQ1gNGdsqkLaMsG0dYKYcAWNRtjbF4YrQUKd9M+zeN9011uj2PXyF05Wz3rMftO0SnOUpPFKTbberZv49Nc/JCs5OjLcsl+r5sZFiIjYsrLySaKIMu2aWXiedFlmzyy8S8ELJJyzfNg4h3tGh7uco3UrNrFF3i+TI8R3ItKaZSEmk0NxHYhWI7ET2KKShy6K70vSIOIW5dFc5ekQcQKY6RQpBxkTYglImyiL9kn04/zcZGob7Np4prOMVneU3hjppfiKqpxdn901xT3nPjeMjZKY1BkahDGYyNQloDYuVQPHp/N5FGY1z05fVg+mB0UqZzmTKobjDoTdDpTEV5dXvIxzCjFSv0ksPTfJbuY08Tp4QMgTkJnI6pNbncRKRGlgJ05CZM2UhcpGeh0Lg8n3p/MzmBTeT70/nZrZCmURjMsbc5EWyqQLWh1i6ls8JU5zdSKcGlgs7yvw5Ekh3LSTfycmnnAuxgbBZWGKzAr5gs65t430RpdjEw4sSmEmaZZNoojIroSy8SCEj6L2Z7KVSGJ1aUM2sM5qMtFuNnBDvwy81TCzR8467+9zMSemXY/oTYzsRifK36atB+I7EKVTjn6m34Z+ou34HSH4slzl6IHEBnZc36I7TXy3/sc6YcYGp30DUkvzPh+FfcndTdouH34mKQVQSv37er7FwS4Jbg4bQ9NY/C9OfZ4EWIJSHTbFbLopS6mvwvreD3+pqmRqZRGvfr5/m/Evv4jYEbHxmNc8o8v7mTYd6eKPFbua3DJXtDu/3yG0J5GqZuITprrwWvjwMcwai5GykZ7ywlyAlIRrAUwqrzusnx481vEurbrZdv4X9jpSFSkZ7RRBykA5CXdaafC9PDgZGd8tHwepmpFUbSlk+9P52FcTDJNvJYp699mY29MlxevgvuZ6RRDXNLnuS1Z2b1y7F9WBFJfV6th3IsdDFMF9n7A3OuFDNnYvAxsyTFtloEYTkZiBTuDc1xnBNjcQcWTqRuItNCNFUaltPPf+w2O0PiRKZuMtPNS8YmiEYzcQjEapGR0WwPxB05eHaTqRuIG2Ao9qW1UvcxioWqKUm6l9VZZW3czzpP/InHl5/Q5TK8nO+TGQTCldDcRuIXe/2MbFVHMbiNUhNwky0sRj1IYpE8LvT9kOjNLTpPi9F4b/EvJGivZ210r4Vx3vsS3+h6O1bXCUaahFUmoNOSzx9OWvw+B4mNvNu7HTllDuv55F5rCwTY6V1r+zXYZiFxq2y1XB6G5Pq/9Xr4cRGKa5AOQDkBKROhkFKQuUgXICUjPZWQ3IBTTytft0s+f2Ab/wAGXMz6ZZDatRPPDkm9LuzTd5W7c34gxnfQVB5eMvVnOO9ZPjx5reR5advLHnpYQ65txCqW62Xbuf2DuQcjpjMRmIDEC5HJByG5AOQuVTxYD7fLcVlCtj6VRXW9HbRVi23FWT0V72XAmcwFLJGueVqNBGu8j8R2MRc3EBM4oUzcZOpG4g7HYAnlkYpCZ13J3bu3m2cpCXjL18CihSCUhCYaZNjDsRqYtMJMGTkMTCUuOYpBIeWKymhs8pu0E5Pgld+RkoYddeH34BbFtMqclKLcZK+ayegucrm1Pj0TX3EnnP6Cx35cFoFEXFBoaWToYmNk8o91/NIQhstI93+6ReWSZtzLgnNnChupfXPt3/udGk31U5b8lfz4Cmw6NVq9m10WsuAFjPY6FzyFtmyYBnsqjGzLmmWM9IdMyP1fqEZFfX1NSIuR8nA4Wur5PTw4B2OE1OyFGN03ZrDa91pfQRK/Jfr+w91mrJN2d7rc8hM2PUzhY/kKb+QNAJMJi5ASOyC2LjLJGsXF5LkOjsjcR2IU5GYzjsjkx8KUmrpNrsTZEplFLb5xVoyaWtlxLcK42/8AZnH6A20uiWKGJAxDRnbCEg0CkMihGMEgkipbMvd48Ub4sOD8VuPIThGuHOMgVJ+ApBJBKIxQAmBsGmszVEbThmjVAvL6EYCQSQxQCUDRLJMBIZNZR5f3MZSpXdj09v8AZ8Y06cozjNuLc4xzcHibs/PcbOLjdS6RGqSaT+TxbGNDnAFxJ5CJaOgte6xjibThr3WKwomaMsOwGYCTHTFYTsI5QHUaN3YRTl4DkkwGqJ7HtH2fGm0ozjUTjGTcb2Ta0IVSO5eFw9WcrVLKJsBjgV+7BdMjoHYinHNePoC4lU6ea8fQGVMGodiOSFSRXOAicTsDbE0kKSyXJFair57xdWmo9G6dsst/ah/pvXb4DlZwTtA2GNGWJjAWBaGAs7JwcQ0ccIwjIho04T5OZTHQxHHDV4c/RkRkTjhUBjaepqNOLz4TfoSCRxxeRGU7P1Z8l6jY6x5ow49Hh+z+/kiyWr1pc36gHHGd+nAs2n+Lus44UKFnGnCMY1D6Wn/JGnAn0KGzEI04bm+8C8OZjOOJMAqeq8fQCZxwoyJ5iJmnCsdE8OtLkhe07uZxw/8AzGXopmM44gygLBkccAJ//9k=);
}

/* Main Start */
.main {
    display: flex;
    justify-content: center;
}

.walletbalance {
    width: 90%;
    height: 150px;
    background-color: hsl(240, 95%, 9%);
    background-color: #751e1e;
    border-radius: 20px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    flex-direction: column;
    font-size: 25px;
    border-radius: 5px;
    background-image: url(https://images.unsplash.com/photo-1595026677025-0eff2b5b3a16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80);
}

.mainbottom {
    margin-top: 15px;
    display: flex;
    justify-content: center;
}

.carkdivi {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.carxolan a {
    display: flex;
    align-items: center;
}

.carxolan {
    height: 90px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    background-image: url(https://images.unsplash.com/photo-1595026677025-0eff2b5b3a16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80);
}

.biletolan {
    height: 90px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(https://images.unsplash.com/photo-1595026677025-0eff2b5b3a16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80);
}

.biletolan a {
    display: flex;
    align-items: center;
}

.maindiv {
    width: 90%;
    background-color: hsl(240, 95%, 9%);
    display: flex;
    height: 150px;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 10px;
    background-image: url('@/assets/images/habesli.jpg');
}
marquee img{
    /* width: 80px; */
    height: 40px;
    margin-right: 10px;
}
marquee{
    display: flex;
    align-items: center;
    margin: auto;
    margin-bottom: 20px;
    margin-top: 20px;
    background-color: #9097d1;
}

.morqueeediv {
    display: flex;
    justify-content: center;
}

.maininterior {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.maininterior i {
    color: hsl(0, 0%, 100%);
}

a {
    text-decoration: none;
    color: #ffffff;
}

marquee {
    background-color: hsl(240, 95%, 9%);
    background-color: #cecece;
    margin-top: 15px;
    color: #ffffff;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-image: url(https://images.unsplash.com/photo-1595026677025-0eff2b5b3a16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80);
}

.main1 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 75px;
    width: 100%;
}

.main2 {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    height: 75px;
}

.cark {
    width: 100%;
    display: flex;
    justify-content: center;
}

.maininterior i {
    padding: 5px;
}

.carkdivi {
    width: 90%;
    height: 90px;
    margin-top: 15px;
    display: flex;
    align-items: center;
}

.carkdivi img {
    width: 100%;
    height: 90px;
    background-position: 100% 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.carkdivi marquee {
    margin-bottom: 15px;
}

.wallet2 {
    width: 90%;
    margin: auto;
    height: 150px;
    display: flex;
    margin-top: 15px;
    justify-content: space-around;
    /* background-color: hsl(240, 95%, 9%); */
    align-items: center;
}

.wallet2div1 {
    width: 170px;
    display: flex;
    flex-direction: column;
    height: 120px;
    background-color: #160961;
    border-radius: 20px;
    justify-content: space-around;
    align-items: center;
    background-image: url(https://images.unsplash.com/photo-1595026677025-0eff2b5b3a16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80);
}

.valet2div2daxili2 {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.wallet2div2 {
    width: 170px;
    background-image: url(https://images.unsplash.com/photo-1595026677025-0eff2b5b3a16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80);
    justify-content: space-around;
    align-items: center;
    display: flex;
    border-radius: 20px;
    align-items: center;
    flex-direction: column;
    color: #Fff;
    height: 120px;
    background-color: #0492c2;
}

.wallet2div2 img {
    width: 40px;
    height: 40px;
}

.wrapper {
    position: relative;
    height: 170px;
    width: 90%;
    margin-top: 20px;
    border-radius: 10px;
    perspective: 1000px;
}

.wrapper i,
.wrapper h3 {
    font-size: 30px;
    color: #ffff;
}

.wrapper i {
    font-size: 65px;
}

.wrapper .flip-card {
    position: relative;
    height: 100%;
    width: 100%;
    background: #D48600;
    transform-style: preserve-3d;
    transition: all 1s ease-in-out;
    background-image: url(https://images.unsplash.com/photo-1595026677025-0eff2b5b3a16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80);
}

.wrapper:hover .flip-card {
    transform: rotateY(180deg);
}

.flip-card .card {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    backface-visibility: hidden;
    position: absolute;
    background-image: url(https://images.unsplash.com/photo-1595026677025-0eff2b5b3a16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80);
}

.back.card {
    transform: rotateY(180deg);
}

.back.card .num {
    font-size: 25px;
    font-weight: 600;
    color: #ffffff;
}

.sponsor {
    width: 100%;
    height: 100px;
    display: flex;
    gap: 1rem;
    justify-content: flex-start;
    overflow-x: scroll;
}

.sponsor .box {
    min-width: 140px;
    width: calc(33% - 1rem);
    background: #fff;
    opacity: 0.5;
    border-radius: 2rem;
    display: flex;
    width: 140px;
    justify-content: center;
    align-items: center;
    overflow-x: scroll;
}

.sponsor .box img {
    width: 60px;
}

.roadmap {
    margin: 1rem;
}

.roadmap .timeline {
    border-left: #cacde7 solid 5px;
}

.roadmap .timeline .time {
    margin-left: 2.2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
}

.roadmap .timeline .time .line {
    position: absolute;
    width: 2.2rem;
    height: 0.33rem;
    top: 50%;
    left: -2.2rem;
    background: #6e94db;
}

.roadmap .timeline .time .line2 {
    position: absolute;
    width: 0.33rem;
    height: 1rem;
    background: #9097d1;
    top: 2.50rem;
    left: 50%;
}

.roadmap .timeline .time ion-icon {
    background: #d4000093;
    color: rgb(255, 255, 255);
    position: absolute;
    top: calc(50% - 0.75rem);
    left: -0.75rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
}

.roadmap .timeline .time .date {
    background: #525fce;
    color: #cacde7;
    border-radius: 1.5rem;
    text-align: center;
    padding: 0.5rem;
    font-size: 1.25rem;
}

.roadmap .timeline .content {
    background: #fff;
    color: #000;
    border-radius: 1.5rem;
    padding: 1rem;
    opacity: 0.7;
}

.roadmap .timeline .content ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.roadmap .timeline .content ul li {
    position: relative;
    padding-left: 0.66rem;
}

.roadmap .timeline .content ul li::before {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    top: calc(50% - 5px);
    left: 0;
    background: #0492c2;
}
.back.card img{
    width: 30px;
}
</style>