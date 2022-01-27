<template>
  <section id="ver-evento">
    <h1>Visualizar Evento</h1>
    <Breadcrumbs :items="items"></Breadcrumbs>
    <CardDetailsBook class="mt-3" :livro="evento"></CardDetailsBook>
  </section>
</template>

<script>
export default {
  layout: "dashboard",
  data: () => ({
    items: [
      { text: "Dashboard", to: "/dashboard/home" },
      { text: "Evento", to: "/dashboard/evento/listar" },
      { text: "Visualizar", disabled: true },
    ],
    evento: [],
  }),
  created() {
    this.getEvento();
  },
  methods: {
    async getEvento() {
      this.evento = await this.$axios.$get(`/eventos/${this.$route.params.id}`);
    },
  },
};
</script>

<style>
</style>