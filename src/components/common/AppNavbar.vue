<template>
  <div>
    <v-app-bar app color="white" hide-on-scroll>
      <router-link to="/">
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://firebasestorage.googleapis.com/v0/b/dhopaahaat.appspot.com/o/logo-removebg-preview.png?alt=media&token=a22b5c67-a57f-4038-aee2-c8c7a860de75"
            transition="scale-transition"
            width="60"
          />
        </div>
      </router-link>
      <v-toolbar-title>DhopaaHaat</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- in desktop mode -->
      <div class="d-none d-sm-flex">
        <v-btn class="text-capitalize mr-3" v-for="item in pageItems" :key="item.title" :to="item.link" depressed plain text>
          {{ item.title }}
        </v-btn>
        <v-btn class="text-capitalize mr-3 primary white--text" outlined @click="logout"> Logout <v-icon right>mdi-logout</v-icon> </v-btn>
      </div>

      <div class="d-flex d-sm-none">
        <v-menu left bottom rounded="lg" transition="scale-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" aria-label="menu">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>

          <!-- in mobile mode -->
          <v-list>
            <v-list-item v-for="item in pageItems" :key="item.title" :to="item.link">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
            <v-list-item @click="logout">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    pageItems: [
      { title: "Dashboard", link: "/" },
      { title: "Shop List", link: "/shop-list" },
      { title: "Order List", link: "/order-list" },
      { title: "User List", link: "/user-list" },
    ],
  }),
  methods: {
    logout() {
      this.$store.commit("LOGOUT");
    },
  },
};
</script>

<style lang="scss" scoped></style>
