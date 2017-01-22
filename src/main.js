import Vue from 'vue'
Vue.config.debug = true
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
// set lang
var lang = window.localStorage.getItem('lang') || 'th'
Vue.config.lang = lang
// set locales
import locales from './locales'
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})
import router from './router'

import fastclick from 'fastclick'
import App from './App'

App.router = router
new Vue(App).$mount('#app')

fastclick.attach(document.body)

import {initErrorHandle} from '../../lib_bz/functions/error'
//  toastr show error
initErrorHandle()
