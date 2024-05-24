<template>
  <v-container>
    <div class="display-2 text-center">Order List</div>
    <v-card class="mt-6" rounded="lg">
      <v-card-text>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Order number
                </th>
                <th class="text-left">
                  User name
                </th>
                <th class="text-left">
                  User phone number
                </th>
                <th class="text-left">
                  Shop name
                </th>
                <th class="text-left">
                  Shop owner
                </th>
                <th class="text-left">
                  Owner phone number
                </th>
                <th class="text-left">
                  Price
                </th>
                <th class="text-left">
                  Order date
                </th>
                <th class="text-left">
                  Order status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in orderList" :key="order.order_id">
                <td>{{ order.order_id }}</td>
                <td>{{ order.customer_name }}</td>
                <td>{{ order.customer_phone }}</td>
                <td>{{ order.shop_name }}</td>
                <td>{{ order.shop_owner }}</td>
                <td>{{ order.shop_owner_phone }}</td>
                <td>{{ order.bill }}</td>
                <td>{{ moment(order.createdAt).format("LL") }}</td>
                <td>{{ order.order_status }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";

export default {
  data: () => ({
    moment,
  }),
  computed: {
    ...mapState(["orderList"]),
  },
  created() {
    this.$store.dispatch("getOrderListInformation");
  },
};
</script>
