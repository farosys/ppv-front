<template>
  <v-app-bar
    color="secondary"
    tag="nav"
    dark
    fixed
    app
    clipped-left
    class="pr-2"
  >
    <v-toolbar-title>Portal Palavra Viva</v-toolbar-title>
    <v-app-bar-nav-icon @click="openNav" class="ml-5"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <MenuUser></MenuUser>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    openNav() {
      this.$emit("open-drawer");
    },
  },
};
</script>

<style>
/* nav{
    z-index: 100;
} */
</style>