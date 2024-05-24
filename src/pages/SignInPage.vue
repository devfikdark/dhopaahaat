<template>
  <div>
    <v-container>
      <v-row style="height: 100vh" align="center">
        <v-col cols="12" md="4" lg="6">
          <v-img
            src="https://firebasestorage.googleapis.com/v0/b/dhopaahaat.appspot.com/o/mobile-logo-removebg-preview.png?alt=media&token=ccc8e818-3d60-4777-91da-1a350cc16a6f"
            contain
            width="500"
            height="auto"
            class="mx-auto"
          />
        </v-col>
        <v-col cols="12" md="8" lg="6">
          <v-card rounded="lg" class="glass px-6">
            <v-card-title class="custom-font d-flex justify-center">Sign In As Administrator</v-card-title>
            <v-form ref="form" v-model="valid" @submit.prevent="handleSubmit">
              <v-row>
                <v-col cols="12">
                  <v-text-field outlined label="Email" v-model="email" :rules="validateEmail" />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    outlined
                    :type="showPass ? 'text' : 'password'"
                    :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPass = !showPass"
                    label="Password"
                    v-model="password"
                    :rules="requiredField"
                  />
                </v-col>

                <v-btn block color="primary" class="button-hover white--text custom-font mb-4" :disabled="!valid" :loading="isLoading" type="submit">Login</v-btn>
              </v-row>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <app-snackbar />
  </div>
</template>

<script>
import { mapState } from "vuex";
import AppSnackbar from "../components/common/AppSnackbar.vue";
import { validateEmail, requiredField } from "../validations/field-validation";

export default {
  components: { AppSnackbar },

  data: () => ({
    email: "",
    password: "",
    valid: true,
    showPass: false,
    requiredField,
    validateEmail,
  }),
  computed: {
    ...mapState(["isLoading"]),
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch("adminAuthentication", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.glass {
  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8));
  box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.2) !important;
}
</style>
