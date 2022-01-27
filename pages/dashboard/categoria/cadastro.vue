<template>
  <section id="cad-categoria">
    <h1>Cadastrar Categoria</h1>
    <Breadcrumbs :items="items"></Breadcrumbs>
    <Form form="form-new-categoria" class="mt-3"></Form>
  </section>
</template>

<script>
export default {
  layout: "dashboard",
  data: () => ({
    items: [
      { text: "Dashoboard", to: "/dashboard/home" },
      { text: "Categoria", to: "/dashboard/categoria/listar" },
      { text: "Cadastrar", disabled: true },
    ],
  }),
};
</script>

<style>
</style>