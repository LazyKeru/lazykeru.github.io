import { createRouter, createWebHashHistory } from "vue-router"
import Main from "@/pages/Main"
import Experience from "@/pages/Experience"
import Projects from "@/pages/Projects"

const routes = [
    {
        path: "/",
        name: "Main",
        component: Main,
    },
    {
        path: "/experience",
        name: "Experience",
        component: Experience
    },
    {
        path: "/projects",
        name: "Projects",
        component: Projects
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})