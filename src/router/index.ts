import { createRouter, createWebHistory } from "vue-router"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue")
    },
    {
      path: "/drive",
      name: "drive",
      component: () => import("@/views/DriveView.vue")
    },
    {
      path: "/drive/:id",
      name: "book",
      component: () => import("@/views/BookView.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/ContactView.vue")
    }
  ]
})

router.beforeEach((to, from, next) => {
  scrollTo(0, 0)
  next()
})

export default router
