<template>
  <v-container>
    <div class="display-2 text-center">User List</div>
    <v-card class="mt-6" rounded="lg">
      <v-card-text>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  User name
                </th>
                <th class="text-left">
                  Full name
                </th>
                <th class="text-left">
                  Phone number
                </th>
                <th class="text-left">
                  Email
                </th>
                <th class="text-left">
                  Address
                </th>
                <th class="text-left">
                  Account created date
                </th>
                <!-- <th class="text-left">
                  Account status
                </th> -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in userList" :key="user.id">
                <td>{{ user.user_name }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.phone }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.full_address }}</td>
                <td>{{ moment(user.createdAt).format("LL") }}</td>
                <!-- <td v-if="user.status === 'accepted'"><v-switch @change="changeUserAccountStatus(user)" v-model="user.status"></v-switch></td> -->
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
import moment from "moment";
import AppSnackbar from "../components/common/AppSnackbar.vue";

export default {
  components: { AppSnackbar },
  data: () => ({
    moment,
  }),

  computed: {
    ...mapState(["userList"]),
  },

  created() {
    this.$store.dispatch("getUserList");
  },

  method: {
    changeUserAccountStatus(info) {
      console.log(info);
    },
  },
};
</script>
