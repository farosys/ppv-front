<template>
  <section id="lista-categoria">
    <h1>Listar Categoria</h1>
    <Breadcrumbs :items="items"></Breadcrumbs>
    <ListCategoria class="mt-3"></ListCategoria>
  </section>
</template>

<script>
export default {
  layout: "dashboard",
  data: () => ({
    items: [
      { text: "Dashoboard", to: "/dashboard/home" },
      { text: "Categoria", disabled: true },
    ],
  }),
};
</script>

<style>
</style>