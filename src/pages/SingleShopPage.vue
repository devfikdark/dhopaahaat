<template>
  <v-container>
    <div class="display-1 text-center mt-2 mb-6">Details information of {{ singleShopInformation.shop_name }}</div>

    <v-img contain :src="singleShopInformation.picture ? singleShopInformation.picture : 'https://picsum.photos/id/11/500/300'" width="600" height="auto" class="mx-auto" alt="Shop image" />

    <v-row class="mt-12">
      <v-col cols="12" md="10" lg="8" offset-md="3" offset-lg="4">
        <v-row v-if="singleShopInformation.status === 'pending'">
          <v-col cols="6"> <v-btn block color="primary" @click="acceptShop">Accept</v-btn> </v-col>
          <v-col cols="6"> <v-btn block outlined color="red" @click="rejectShop">Reject</v-btn> </v-col>
        </v-row>
        <v-row>
          <v-col v-if="singleShopInformation.status === 'accepted'" cols="12"> <div class="title">This shop is accepted</div> </v-col>
          <v-col v-if="singleShopInformation.status === 'rejected'"> <v-btn block color="primary" @click="acceptShop">Accept</v-btn> </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            Shop name:
          </v-col>
          <v-col cols="8">
            {{ singleShopInformation.shop_name }}
          </v-col>
          <v-col cols="4">
            Owner name:
          </v-col>
          <v-col cols="8">
            {{ singleShopInformation.owner_name }}
          </v-col>
          <v-col cols="4">
            Mobile number:
          </v-col>
          <v-col cols="8">
            {{ singleShopInformation.phone }}
          </v-col>
          <v-col cols="4">
            Email:
          </v-col>
          <v-col cols="8">
            {{ singleShopInformation.email }}
          </v-col>
          <v-col cols="4">
            Adress:
          </v-col>
          <v-col cols="8">
            {{ singleShopInformation.full_address }}
          </v-col>
          <v-col cols="4">
            Rating:
          </v-col>
          <v-col cols="8">
            {{ singleShopInformation.rating }}
          </v-col>
          <v-col cols="4">
            Trade licnese verfied:
          </v-col>
          <v-col cols="8">
            <v-chip :color="singleShopInformation.trade_verified ? 'green' : 'red'" dark> {{ singleShopInformation.trade_verified ? "Yes" : "No" }} </v-chip>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-img v-if="singleShopInformation.trade_license" contain :src="singleShopInformation.trade_license" width="500" height="auto" class="mx-auto my-6" alt="Trade license" />
    <app-snackbar />
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import AppSnackbar from "../components/common/AppSnackbar.vue";

export default {
  components: { AppSnackbar },
  computed: {
    ...mapState(["singleShopInformation"]),
  },

  created() {
    console.log(this.$route.params.id);
    this.$store.dispatch("getSingleShopInformation", this.$route.params.id);
  },

  methods: {
    acceptShop() {
      this.$store.dispatch("changeShopStatus", { status: "accepted", id: this.$route.params.id });
    },
    rejectShop() {
      this.$store.dispatch("changeShopStatus", { status: "rejected", id: this.$route.params.id });
    },
  },
};
</script>

<style lang="scss" scoped></style>
