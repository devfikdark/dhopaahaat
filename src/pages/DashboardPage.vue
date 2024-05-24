<template>
  <v-container class="mt-6">
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3">
        <dashboard-card :count="dashboardInformation.total_shop" title="Total Shop" icon="mdi-store" iconColor="pink darken-1" />
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <dashboard-card :count="dashboardInformation.total_user" title="Total Users" icon="mdi-account" iconColor="blue" />
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <dashboard-card :count="dashboardInformation.pending_shop" title="Pending Shop" icon="mdi-clock-time-four" iconColor="orange" />
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <dashboard-card :count="dashboardInformation.verified_shop" title="Verified Shop" icon="mdi-check-decagram" iconColor="green" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card rounded="lg">
          <v-card-text>
            <line-chart-daily-users />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <app-snackbar />
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import LineChartDailyUsers from "../components/chart/LineChartDailyUsers.vue";
import AppSnackbar from "../components/common/AppSnackbar.vue";
import DashboardCard from "../components/DashboardCard.vue";
export default {
  components: { DashboardCard, LineChartDailyUsers, AppSnackbar },
  computed: {
    ...mapState(["dashboardInformation"]),
  },

  created() {
    this.$store.dispatch("getDashboardCardInformation");
  },
};
</script>

<style lang="scss" scoped></style>
