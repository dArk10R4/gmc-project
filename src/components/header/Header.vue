<script setup>
import { useLocaleStore } from '@/stores/LocaleStore';
import { useAuthStore } from '@/stores/AuthStore';
import { ref, watch } from 'vue';
import router from '@/router';

const store = useLocaleStore();

// Initialize locale
store.initializeLocale();

const locale = ref(store.locale);
watch(locale, (newLocale) => {
  store.setLocale(newLocale);
});

const translate = store.translate;

const showButtons = ref(false);
const isLogin = ref(true);

const toggleButtons = () => {
  showButtons.value = !showButtons.value;
};

const signIn = () => {
  router.push({ path: '/auth/signIn' });
};

const signUp = () => {
  router.push({ path: '/auth/signup' });
};

if (localStorage.getItem('accessToken')) {
  console.log(localStorage.getItem('accessToken'));
}

const logOut = async () => {

  const authStore = useAuthStore()
  try {
      await authStore.logout()
  } catch (error) {
      console.log(error)
  }
}
</script>

<template>
  <header>
    <div class="logo">
      <img src="@/assets/images/logo.png" alt="">
    </div>

    <div class="language">
      <ion-icon name="language-outline" class="myicon" ></ion-icon>
      <select v-model="locale">
        <option value="en">{{ translate('English').value }}</option>
        <option value="tr">{{ translate('Turkish').value }}</option>
        <option value="ru">{{ translate('Russian').value }}</option>
      </select>
    </div>

    <div class="join">
      <button v-if="!showButtons" @click="toggleButtons">Join Now</button>
      <div v-if="showButtons">
        <button @click="signIn">Sign In</button>
        <button @click="signUp">Sign Up</button>
      </div>
      <div v-else>
        <button @click="logOut">Log Out</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(to top right ,#c5dffe,#c6dfff,#b2d6ff,#beddfe,#b6d9fe,#b8d9ff,#f5f9ff,#f2f9ff,#f2f8fe,#f1f6ff);

  border-bottom: 1px solid #fff;
  overflow: scroll;
  width: 100%;
}
 .myicon{
  color: #000 !important;
}
header .logo {
  height: 100%;
  padding: 0.50rem;
}

header .logo img {
  height: 100%;
}

header .language {
  display: flex;
  justify-content: center;
  flex-grow: 1;
  padding-left: 1rem;
  padding-right: 1rem;
}

header .language ion-icon {
  color: aliceblue;
  font-size: 1.5rem;
}

header .language select {
  background: none;
  border: none;
  color: #000;
  font-size: 1rem;
}



header .join {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

header .join div {
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
}

header .join button,
header .join div button {
  border: none;
  background: linear-gradient(109.6deg, rgba(102, 51, 153, 1) 11.2%, rgba(2, 0, 4, 1) 91.1%);
  color: #fff;
  padding: 0.50rem;
  border-radius: 1rem;
  transition: 0.5s ease-in-out all;
  border: 3px double #fff;
}

header .join button:hover,
header .join div button:hover {
  background: linear-gradient(58.2deg, rgba(40, 91, 212, 0.73) -3%, rgba(171, 53, 163, 0.45) 49.3%, rgba(255, 204, 112, 0.37) 97.7%);
}
</style>