import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import "./assets/main.css"

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaQuoteLeft, FaQuoteRight, FaLink, HiArrowUp } from "oh-vue-icons/icons";

const app = createApp(App)
app.component("v-icon", OhVueIcon)
addIcons(FaQuoteLeft, FaQuoteRight, FaLink, HiArrowUp)
app.mount("#app")