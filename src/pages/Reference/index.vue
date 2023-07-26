<template>
    <main v-if="references">
        <div class="table-box" v-for="(refList, refKey) in references" :key="refKey">
            <h5><a>Reference Level {{ refKey }}</a></h5>

            <div class="table-row table-head">
                <div class="table-cell first-cell">
                    <p>Name</p>
                </div>
                <div class="table-cell">
                    <p>Email</p>
                </div>
                <div class="table-cell last-cell">
                    <p>Active</p>
                </div>
                <div class="table-cell last-cell">
                    <p>Send</p>
                </div>
            </div>

            <div class="table-row" v-for="(item, index) in refList" :key="index">
                <div class="table-cell first-cell">
                    <p>{{ item.username }}</p>
                </div>
                <div class="table-cell">
                    <p>{{ item.email }}</p>
                </div>
                <div class="table-cell">
                    <a href="">Active</a>
                </div>
                <div class="table-cell last-cell">
                    <ion-icon @click="openPopup(item)" name="cash-outline"></ion-icon>
                </div>
            </div>
        </div>

        <div class="popup" v-if="isPopupOpen">
            <div class="content">
                <h2>{{ username }} kişisine para göndermek istiyor musun?</h2>
                <div class="info">
                    <input type="number" placeholder="Tutarı Girin!">
                </div>
                <div class="buttons">
                    <button>Evet</button>
                    <button @click="closePopup">Hayır</button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import UserService from '@/services/UserService'

export default {
    data() {
        return {
            references: null,
            isPopupOpen: false,
            username: ''
        }
    },
    methods: {
        async openPopup(id) {
            this.isPopupOpen = true
            console.log(id, "Naber")
            console.log(this.references)
        },
        closePopup() {
            this.isPopupOpen = false;
        },
    },
    async created() {
        try {
            this.references = (await UserService.refdetail()).data
        } catch (error) {
            console.log("Error amk error")
        }
    }
}
</script>

<style scoped>
.table-box {
    margin: 50px auto;
}

h5 {
    text-align: center;
    font-size: 25px;
    color: #000000;
}

h5 a {
    color: #552a2a;
}

.table-row {
    display: table;
    width: 90%;
    margin: 10px auto;
    font-family: sans-serif;
    background: transparent;
    padding: 12px 0;
    color: #000;
    font-size: 15px;
    font-weight: 600;
    box-shadow: 0 1px 4px 0px rgba(0, 0, 50, 0.3);
}

.table-head {
    background: #00000046;
    box-shadow: none;
    color: #fff;
    font-weight: 600;
    border-radius: 2.5rem;
}

.table-head .table-cell {
    border-right: none;
}

.table-cell {
    display: table-cell;
    width: 20%;
    text-align: center;
    padding: 4px 0;
    border-right: 1px solid #000;
    vertical-align: middle;
}

.first-cell {
    text-align: left;
    padding-left: 10px;
}

.last-cell {
    border-right: none;
}

a {
    text-decoration: none;
    color: #000;
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

@media only screen and (max-width: 600px) {
    .table-row {
        font-size: 15px;
    }
}
</style>