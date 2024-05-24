<template>
  <v-card class="pa-4" rounded="lg">
    <v-row>
      <v-col cols="8">
        <div class="display-1">{{ count }}</div>
        <div class="subtitle-1">{{ title }}</div>
      </v-col>
      <v-col cols="4" class="d-flex align-center justify-center">
        <v-icon :color="iconColor" style="font-size: 3em"> {{ icon }} </v-icon>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: ["count", "title", "icon", "iconColor"],
};
</script>

<style lang="scss" scoped></style>
