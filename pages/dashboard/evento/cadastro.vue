<template>
  <section id="cadastrar-evento">
    <h1>Cadastrar Evento</h1>
    <Breadcrumbs :items="items"></Breadcrumbs>
    <Form form="form-new-evento" class="mt-3"></Form>
  </section>
</template>

<script>
export default {
  layout: "dashboard",
  data: () => ({
    items: [
      { text: "Dashoboard", to: "/dashboard/home" },
      { text: "Evento", to: "/dashboard/evento/listar" },
      { text: "Cadastrar", disabled: true },
    ],
  }),
};
</script>

<style>
</style>