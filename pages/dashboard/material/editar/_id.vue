<template>
  <section id="editar-material">
    <h1>Editar Material</h1>
    <Breadcrumbs :items="items"></Breadcrumbs>
    <Form form="form-edit-material" class="mt-3"></Form>
  </section>
</template>

<script>
export default {
  layout: "dashboard",
  data: () => ({
    items: [
      { text: "Dashboard", to: "/dashboard/home" },
      { text: "Material", to: "/dashboard/material/listar" },
      { text: "Editar", disabled: true },
    ],
  }),
  beforeCreate(){
    this.$router.push({path: '/dashboard/material/listar'})
  }
};
</script>

<style>
</style>