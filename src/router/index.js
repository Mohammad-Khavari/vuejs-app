import {createRouter, createWebHistory} from "vue-router"
import ItemLists from "/src/components/ItemLists.vue"
import Visualization from "/src/components/Visualization.vue"

const routes =[
    {
        path: "/",
        name: "Home",
        component: ItemLists
    },
    {
        path: "/visualization",
        name: "Chart",
        component: Visualization
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router