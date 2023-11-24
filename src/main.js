import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
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

app.use(router)

app.mount('#app')

