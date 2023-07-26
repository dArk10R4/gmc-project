import en from './locales/en.json';
import tr from './locales/tr.json';
import ru from './locales/ru.json';

export const Translation = {
  data() {
    return {
      selectedLanguage: localStorage.getItem('locale') || navigator.language || 'en',
      translatedOptions: {}
    };
  },
  methods: {
    changeLanguage() {
      localStorage.setItem('locale', this.selectedLanguage);
      this.loadTranslations();
    },
    $translate(key) {
      const translations = this.translatedOptions;
      return translations[key] || `[Translation not found for key: ${key}]`;
    },
    loadTranslations() {
      if (this.selectedLanguage === 'en') {
        this.translatedOptions = en;
      } else if (this.selectedLanguage === 'tr') {
        this.translatedOptions = tr;
      } else if (this.selectedLanguage === 'ru') {
        this.translatedOptions = ru;
      } else {
        this.translatedOptions = en;
      }
    }
  },
  watch: {
    selectedLanguage(newLanguage) {
      this.loadTranslations();
    },
  },
  created() {
    this.loadTranslations();
  }
};