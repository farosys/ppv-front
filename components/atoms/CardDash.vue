<template>
  <v-card :color="details.color" width="100%" min-width="180px" dark>
    <v-card-title> {{details.title}} </v-card-title>
    <v-divider></v-divider>
    <v-card-actions class="pt-0">
      <nuxt-link :to="details.link" class="d-flex justify-space-between">
        Ver Detalhes
        <v-icon>mdi-chevron-right</v-icon>
      </nuxt-link>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props: {
        details: {
            type: Object,
            default: () => {}
        }
    }
};
</script>

<style scoped>
a {
  width: 100%;
  color: #fff !important;
  text-decoration: none !important;
}
</style>