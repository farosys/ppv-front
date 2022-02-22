<template>
  <v-menu offset-y transition="slide-y-transition" min-width="123">
    <template #[`activator`]="{ on, attrs }">
      <v-btn icon v-on="on" v-bind="attrs">
        <v-icon>mdi-account-arrow-down</v-icon>
      </v-btn>
    </template>
    <ItensMenuUser></ItensMenuUser>
  </v-menu>
</template>

<script>
export default {}
</script>

<style>
</style>