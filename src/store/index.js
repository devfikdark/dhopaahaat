import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dashboardInformation: null,
    isAuthenticated: false,
    isLoading: false,
    orderList: [],
    singleShopInformation: null,
    snackbarColor: "",
    snackbarText: "",
    shopList: [],
    userId: null,
    userList: [],
    userToken: null,
    tempList: [],
  },

  mutations: {
    SET_IS_LOADING(state, value) {
      state.isLoading = value;
    },
    SHOW_SNACKBAR(state, value) {
      state.snackbarText = value.text;
      state.snackbarColor = value.color;
    },
    SET_USER_ID(state, value) {
      state.userId = value;
    },
    SET_IS_AUTHENTICATED(state, value) {
      state.isAuthenticated = value;
    },
    SET_TOKEN(state, value) {
      state.userToken = value;
    },
    LOGOUT(state) {
      state.userToken = null;
      state.isAuthenticated = false;
      state.userId = null;
      window.localStorage.removeItem("vuex");
      router.push("/login");
    },
    SET_SHOP_LIST(state, value) {
      state.shopList = value;
    },
    SET_TEMP_LIST(state, value) {
      state.tempList = value;
    },
    SET_USER_LIST(state, value) {
      state.userList = value;
    },
    SET_SINGLE_SHOP_INFORMATION(state, value) {
      state.singleShopInformation = value;
    },
    SET_DASHBOARD_INFORMATION(state, value) {
      state.dashboardInformation = value;
    },
    SET_ORDER_INFORMATION(state, value) {
      state.orderList = value;
    },
  },
  actions: {
    adminAuthentication(context, payload) {
      context.commit("SET_IS_LOADING", true);
      axios
        .post("/auth/admin/signin", payload)
        .then((res) => {
          const data = res.data.data;
          context.commit("SET_TOKEN", data.token);
          context.commit("SET_USER_ID", data.id);
          context.commit("SET_IS_AUTHENTICATED", true);
          router.push("/");
        })
        .catch((err) => {
          if (err.response.data.message) {
            context.commit("SHOW_SNACKBAR", { text: `${err.response.data.message}`, color: "error" });
          } else {
            context.commit("SHOW_SNACKBAR", { text: "Something went wrong. Please try again", color: "error" });
          }
        })
        .finally(() => context.commit("SET_IS_LOADING", false));
    },

    getAllShopInformation(context) {
      axios
        .get("/shops/web", {
          headers: {
            Authorization: "Bearer " + context.state.userToken,
          },
        })
        .then((res) => {
          context.commit("SET_SHOP_LIST", res.data.data);
          context.commit("SET_TEMP_LIST", res.data.data);
        })
        .catch((err) => {
          if (err.response.data.message) {
            context.commit("SHOW_SNACKBAR", { text: `${err.response.data.message}`, color: "error" });
          } else {
            context.commit("SHOW_SNACKBAR", { text: "Something went wrong. Please try again", color: "error" });
          }
        });
    },

    filteredShopList(context, payload) {
      let list = [];
      if (payload === "all") {
        list = context.state.shopList;
      } else {
        list = context.state.shopList.filter((shop) => shop.status === payload);
      }
      context.commit("SET_TEMP_LIST", list);
    },

    getUserList(context) {
      axios
        .get("/customers", {
          headers: {
            Authorization: "Bearer " + context.state.userToken,
          },
        })
        .then((res) => {
          context.commit("SET_USER_LIST", res.data.data);
        })
        .catch((err) => {
          if (err.response.data.message) {
            context.commit("SHOW_SNACKBAR", { text: `${err.response.data.message}`, color: "error" });
          } else {
            context.commit("SHOW_SNACKBAR", { text: "Something went wrong. Please try again", color: "error" });
          }
        });
    },

    getSingleShopInformation(context, payload) {
      axios
        .get(`/shops/${payload}`, {
          headers: {
            Authorization: "Bearer " + context.state.userToken,
          },
        })
        .then((res) => {
          context.commit("SET_SINGLE_SHOP_INFORMATION", res.data.data);
        })
        .catch((err) => {
          if (err.response.data.message) {
            context.commit("SHOW_SNACKBAR", { text: `${err.response.data.message}`, color: "error" });
          } else {
            context.commit("SHOW_SNACKBAR", { text: "Something went wrong. Please try again", color: "error" });
          }
        });
    },

    changeShopStatus(context, payload) {
      axios
        .patch(
          `/shops/web/verify/${payload.id}`,
          { status: payload.status },
          {
            headers: {
              Authorization: "Bearer " + context.state.userToken,
            },
          }
        )
        .then(() => {
          context.commit("SHOW_SNACKBAR", { text: "Shop status has been changed successfully", color: "success" });
          context.dispatch("getSingleShopInformation", payload.id);
        })
        .catch((err) => {
          if (err.response.data.message) {
            context.commit("SHOW_SNACKBAR", { text: `${err.response.data.message}`, color: "error" });
          } else {
            context.commit("SHOW_SNACKBAR", { text: "Something went wrong. Please try again", color: "error" });
          }
        });
    },

    getOrderListInformation(context) {
      axios
        .get("/orders/web", {
          headers: {
            Authorization: "Bearer " + context.state.userToken,
          },
        })
        .then((res) => {
          context.commit("SET_ORDER_INFORMATION", res.data.data);
        })
        .catch((err) => {
          if (err.response.data.message) {
            context.commit("SHOW_SNACKBAR", { text: `${err.response.data.message}`, color: "error" });
          } else {
            context.commit("SHOW_SNACKBAR", { text: "Something went wrong. Please try again", color: "error" });
          }
        });
    },

    getDashboardCardInformation(context) {
      axios
        .get("/others/dashboards", {
          headers: {
            Authorization: "Bearer " + context.state.userToken,
          },
        })
        .then((res) => {
          context.commit("SET_DASHBOARD_INFORMATION", res.data.data);
        })
        .catch((err) => {
          if (err.response.data.message) {
            context.commit("SHOW_SNACKBAR", { text: `${err.response.data.message}`, color: "error" });
          } else {
            context.commit("SHOW_SNACKBAR", { text: "Something went wrong. Please try again", color: "error" });
          }
        });
    },
  },

  plugins: [createPersistedState()],
});
