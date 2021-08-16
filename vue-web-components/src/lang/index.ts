import Vue from "vue";
import VueI18n from "vue-i18n";
import enLocale from "./en";
import store from "../store";

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale,
  },
};

const i18n = new VueI18n({
  locale:
    store.getters.language && store.getters.language.title
      ? store.getters.language.title
      : "en",
  messages,
});

export default i18n;
