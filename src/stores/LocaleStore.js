import { defineStore } from 'pinia';
import en from '@/plugins/translation/locales/en.json';
import tr from '@/plugins/translation/locales/tr.json';
import ru from '@/plugins/translation/locales/ru.json';
import { computed } from 'vue';

export const useLocaleStore = defineStore('LocaleStore', {
  state: () => ({
    locale: 'en',
    translations: {}
  }),
  getters: {
    translate: (state) => (key) => computed(() => {
      return state.translations[key] || `[Translation not found for key: ${key}]`;
    })
  },
  
  actions: {
    initializeLocale() {
      this.locale = localStorage.getItem('locale') || 'en';
      this.changeLanguage();
    },
    setLocale(newLocale) {
        this.locale = newLocale;
        localStorage.setItem('locale', newLocale);
        this.changeLanguage();
      },      
    changeLanguage() {
      let translations;
      if (this.locale === 'en') {
        translations = en;
      } else if (this.locale === 'tr') {
        translations = tr;
      } else if (this.locale === 'ru') {
        translations = ru;
      } else {
        translations = en;
      }
      this.translations = translations;
      localStorage.setItem('locale', this.locale);
    },
  },
});
