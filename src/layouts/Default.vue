<template>
  <v-app>
    <app-navbar />
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script>
import AppNavbar from "../components/common/AppNavbar.vue";

export default {
  name: "Default",
  components: { AppNavbar },
};
</script>
