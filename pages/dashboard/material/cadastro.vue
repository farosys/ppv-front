<template>
  <section id="cad-material">
    <h1>Cadastrar Material</h1>
    <Breadcrumbs :items="items"></Breadcrumbs>
    <Form form="form-new-material" class="mt-3"></Form>
  </section>
</template>

<script>
export default {
  layout: "dashboard",
  data: () => ({
    items: [
      { text: "Dashboard", to: "/dashboard/home" },
      { text: "Material", to: "/dashboard/material/listar" },
      { text: "Cadastro", disabled: true },
    ],
  }),
};
</script>

<style>
</style>