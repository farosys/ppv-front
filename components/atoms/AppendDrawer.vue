<template>
  <v-card elevation="0" color="secondary" dark tile class="py-5 px-3">
    <p class="text-caption mb-0">Seja bem-vindo,</p>
    <p class="text-caption mb-0">{{name}}</p>
  </v-card>
</template>

<script>
import { users } from '~/store';
export default {
  computed: {
    name() {
      let name = users.$loged.name;
      if (name) {
        name = name.split(" ")[0];
      }else{
        name = "";
      }
      return name;
    }
  }
};
</script>

<style>
</style>