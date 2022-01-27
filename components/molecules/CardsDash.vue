<template>
  <v-row class="my-3">
    <v-col v-for="card in cards" :key="card.titulo">
      <CardDash :details="card"></CardDash>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Primary Card",
        color: "primary",
        link: "/dashboard/home",
      },
      {
        title: "Warning Card",
        color: "warning",
        link: "/dashboard/home",
      },
      {
        title: "Success Card",
        color: "success",
        link: "/dashboard/home",
      },
      {
        title: "Error Card",
        color: "error",
        link: "/dashboard/home",
      },
    ],
  }),
};
</script>

<style>
</style>