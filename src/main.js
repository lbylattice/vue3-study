import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'highlight.js/styles/atom-one-dark.css'
import directives from '@/directive'
import {
	ElButton,
	ElTable,
	ElAlert,
	ElAutocomplete,
	ElAvatar,
	ElBacktop,
	ElBadge,
	ElText,
	ElSpace,
	ElForm,
	ElFormItem,
	ElInput,
	ElMessage,
	ElContainer,
	ElHeader,
	ElAside,
	ElMain,
	ElCarousel,
	ElCarouselItem,
	ElLink,
	ElImage,
	ElRow,
	ElCol,
	ElScrollbar,
	ElMenu,
	ElSubMenu,
	ElMenuItem,

} from 'element-plus'
import 'element-plus/es/components/message/style/css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const components = [
	ElButton,
	ElTable,
	ElAlert,
	ElAutocomplete,
	ElAvatar,
	ElBacktop,
	ElBadge,
	ElText,
	ElSpace,
	ElForm,
	ElFormItem,
	ElInput,
	ElMessage,
	ElContainer,
	ElHeader,
	ElAside,
	ElMain,
	ElCarousel,
	ElCarouselItem,
	ElLink,
	ElImage,
	ElRow,
	ElCol,
	ElScrollbar,
	ElMenu,
	ElSubMenu,
	ElMenuItem,
]

const pania = createPinia()
const app = createApp(App)
app.use(pania)
for (const cpn of components) {
	app.component(cpn.name, cpn)
}
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}

Object.keys(directives).forEach((e) => app.directive(e, directives[e]))
app.use(router)
app.mount('#app')

