<template>
  <section id="editar-categoria">
    <h1>Editar Categoria</h1>
    <Breadcrumbs :items="items"></Breadcrumbs>
    <Form form="form-edit-categoria" class="mt-3"></Form>
  </section>
</template>

<script>
export default {
  layout: "dashboard",
  data: () => ({
    items: [
      { text: "Dashoboard", to: "/dashboard/home" },
      { text: "Categoria", to: "/dashboard/categoria/listar" },
      { text: "Editar", disabled: true },
    ],
  }),
};
</script>

<style>
</style>