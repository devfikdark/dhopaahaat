<template>
  <v-container>
    <div class="display-2 mb-6 text-center">Shop List</div>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-select dense label="Filter shop" :items="items" v-model="shopStatus" return-object item-text="name" outlined @change="filterShopList" />
      </v-col>
    </v-row>
    <v-card rounded="lg">
      <v-card-text>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Shop Name
                </th>
                <th class="text-left">
                  Owner name
                </th>
                <th class="text-left">
                  Phone number
                </th>
                <th class="text-left">
                  Status
                </th>
                <th class="text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="shop in tempList" :key="shop.id" :to="`/shop/${shop.id}`">
                <td>{{ shop.shop_name }}</td>
                <td>{{ shop.owner_name }}</td>
                <td>{{ shop.phone }}</td>
                <td>{{ shop.status }}</td>
                <td>
                  <v-btn icon :to="`/shop/${shop.id}`"><v-icon>mdi-open-in-new</v-icon></v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
    <app-snackbar />
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import AppSnackbar from "../components/common/AppSnackbar.vue";
import { statusList } from "../utils/constants";
export default {
  components: { AppSnackbar },
  data: () => ({
    items: statusList,
    shopStatus: "",
  }),

  computed: {
    ...mapState(["tempList"]),
  },

  created() {
    this.$store.dispatch("getAllShopInformation");
  },

  methods: {
    filterShopList() {
      this.$store.dispatch("filteredShopList", this.shopStatus.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .dropdown {
    width: 100%;
  }
}
</style>
