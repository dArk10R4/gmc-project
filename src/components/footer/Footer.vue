<script setup>
import { useLocaleStore } from '@/stores/LocaleStore';
import { computed } from 'vue';

const store = useLocaleStore();

// Initialize locale
store.initializeLocale();

const translate = (key) => computed(() => store.translate(key)).value;
</script>

<template>
    <footer>
        <div class="menu">
            <router-link to="/" class="menu-item">
                <ion-icon name="home-outline"></ion-icon>
                <span>{{ translate('Home').value }}</span>
            </router-link>
            <router-link to="/business" class="menu-item">
                <ion-icon name="business-outline"></ion-icon>
                <span>{{ translate('Business').value }}</span>
            </router-link>
            <router-link to="/invest" class="menu-item">
                <ion-icon name="invert-mode-outline"></ion-icon>
                <span>{{ translate('Invest').value }}</span>
            </router-link>
            <router-link to="/reference" class="menu-item">
                <ion-icon name="people-outline"></ion-icon>
                <span>{{ translate('Reference').value }}</span>
            </router-link>
            <router-link to="/profile" class="menu-item">
                <ion-icon name="person-outline"></ion-icon>
                <span>{{ translate('Profile').value }}</span>
            </router-link>
        </div>
    </footer>
</template>



<script>
import { Translation } from '@/plugins/translation';

export default {
    mixins: [Translation]
}
</script>

<style scoped>
::-webkit-scrollbar {
    display: none;
}

footer {
    background: url('https://images.unsplash.com/photo-1595026677025-0eff2b5b3a16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80');
    color: #fff;
    border-top: 1px solid #fff;
    width: 100%;
    overflow: scroll;
}

footer .menu {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}

footer .menu .menu-item {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    height: 100%;
    padding-top: 0.25rem;
    color: #fff !important;
    text-decoration: none;
}

footer .menu .menu-item ion-icon {
    font-size: 2rem;
}

footer .menu .menu-item:hover {
    background: radial-gradient(circle farthest-corner at 10% 20%, rgba(243, 218, 216, 1) 0%, rgba(255, 191, 205, 1) 36.4%, rgba(248, 86, 172, 1) 90%);
}
</style>