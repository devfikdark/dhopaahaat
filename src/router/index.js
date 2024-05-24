import Vue from "vue";
import VueRouter from "vue-router";
import SignInPage from "../pages/SignInPage";
import store from "../store";

Vue.use(VueRouter);

/* eslint-disable */
const routes = [
  {
    path: "/login",
    name: "Login",
    meta: { layout: "blank" },
    component: SignInPage,
  },
  {
    path: "/",
    name: "Dashboard",
    component: () => import("../pages/DashboardPage"),
    beforeEnter: protectedRoutes,
  },
  {
    path: "/shop-list",
    name: "Shop List",
    component: () => import("../pages/ShopListPage"),
    beforeEnter: protectedRoutes,
  },
  {
    path: "/order-list",
    name: "Order List",
    component: () => import("../pages/OrderListPage"),
    beforeEnter: protectedRoutes,
  },
  {
    path: "/shop/:id",
    name: "Shop Details",
    component: () => import("../pages/SingleShopPage"),
    beforeEnter: protectedRoutes,
  },
  {
    path: "/user-list",
    name: "User List",
    component: () => import("../pages/UserListPage"),
    beforeEnter: protectedRoutes,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`;
  next();
});

// code to check authentication of the users

function protectedRoutes(to, from, next) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log(isAuthenticated);
  if (!store.state.isAuthenticated) {
    next({ name: "Login" });
  } else {
    next();
  }
}

export default router;
