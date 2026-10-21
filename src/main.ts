import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { inject } from '@vercel/analytics'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaQuoteLeft, FaQuoteRight, FaLink, HiArrowUp, HiArrowNarrowRight } from "oh-vue-icons/icons";

inject()

const app = createApp(App)
app.component("v-icon", OhVueIcon)
addIcons(FaQuoteLeft, FaQuoteRight, FaLink, HiArrowUp, HiArrowNarrowRight)
app.mount("#app")