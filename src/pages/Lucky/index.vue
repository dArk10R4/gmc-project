<template>
    <main>
        <div class="container">
            <div class="wheel" :style="rotationStyle">
                <div class="slice" v-for="(slice, index) in slices" :key="index" :style="getSliceStyle(index)">
                    <div class="inner-slice">{{ slice }}</div>
                </div>
            </div>
            <div class="spinBtn" @click="spinWheel">Spin</div>
        </div>

        <div class="right">
            <span v-if="user">Kalan Çark Hakkı: {{right}}</span>
        </div>

        <div class="success-message" v-if="showSuccessMessage">{{ successMessage }}</div>
        <div class="error-message" v-if="showErrorMessage">{{ errorMessage }}</div>
    </main>
</template>
    
<script>
import UserService from '../../services/UserService';
import {useUserStore} from '@/stores/UserStore'

export default {
    data() {
        return {
            user: null,
            rotation: 0,
            right: 0,
            slices: ["5", "10", "15", "20", "25", "30", "35", "40"],
            colors: ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#00bcd4', '#009688'],
            showSuccessMessage: false,
            successMessage: '',
            showErrorMessage: false,
            errorMessage: ''
        };
    },
    methods: {
        /*
         * 0: 10
         * 1: 5
         * 2: 40
         * 3: 35
         * 4: 30
         * 5: 25
         * 6: 20
         * 7: 15
         */
        async spinWheel() {
            try {
                const response = (await UserService.draw())
                const targetIndex = response.data.num;
                const sliceAngle = 360 / this.slices.length;
                this.rotation = 18000 + targetIndex * sliceAngle;
                this.right = response.data.wheel

                this.successMessage = 'Çark Döndürme Başarılı!';
                this.showSuccessMessage = true;

                setTimeout(() => {
                    // 5 saniye sonra başarılı mesajını kapat
                    this.showSuccessMessage = false;
                }, 5000);
            } catch (error) {
                if (error.response.status === 400) {
                    this.errorMessage = error.response.data['error']
                    this.showErrorMessage = true;

                    setTimeout(() => {
                        // 5 saniye sonra başarılı mesajını kapat
                        this.showErrorMessage = false;
                    }, 5000);
                }
            }
        },
        getSliceStyle(index) {
            const rotation = (360 / this.slices.length) * index;
            const color = this.colors[index % this.colors.length];
            return {
                transform: `rotate(${rotation}deg)`,
                backgroundColor: color
            };
        },
    },
    computed: {
        rotationStyle() {
            return {
                transform: `rotate(${this.rotation}deg)`,
                transition: 'transform 2s ease-in-out'
            };
        },
    },
    async created() {
    const userStore = useUserStore()
      await userStore.fill()
      this.user = userStore.user
      this.right = userStore.user.wheel
  }
};
</script>

    
<style scoped>
main {
    background: #111;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container {
    position: relative;
    width: 280px;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container .spinBtn {
    position: absolute;
    width: 60px;
    height: 60px;
    background: #fff;
    border-radius: 50%;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: 600;
    color: #333;
    letter-spacing: 0.1rem;
    border: 4px solid rgba(0, 0, 0, 0.75);
    cursor: pointer;
    user-select: none;
}

.container .spinBtn::before {
    content: '';
    position: absolute;
    top: -28px;
    width: 20px;
    height: 30px;
    background: #fff;
    clip-path: polygon(50% 0%, 15% 100%, 85% 100%);
}

.wheel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #333;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 0 5px #333,
        0 0 0 15px #fff,
        0 0 0 18px #111;
}

.slice {
    position: absolute;
    width: 50%;
    height: 50%;
    transform-origin: bottom right;
    clip-path: polygon(0 0, 58% 0, 100% 100%, 0 58%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
}

.right {
    margin-top: 2rem;
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
  