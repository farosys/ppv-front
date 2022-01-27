<template>
  <section id="editar-evento">
    <h1>Editar Evento</h1>
    <Breadcrumbs :items="items"></Breadcrumbs>
    <Form form="form-edit-evento" class="mt-3"></Form>
  </section>
</template>

<script>
export default {
  layout: "dashboard",
  data: () => ({
    items: [
      { text: "Dashoboard", to: "/dashboard/home" },
      { text: "Evento", to: "/dashboard/evento/listar" },
      { text: "Editar", disabled: true },
    ],
  }),
};
</script>

<style>
</style>