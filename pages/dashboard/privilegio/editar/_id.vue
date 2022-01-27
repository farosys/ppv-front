<template>
  <section id="editar-privilegio">
    <h1>Editar Privilégio</h1>
    <Breadcrumbs :items="items"></Breadcrumbs>
    <Form form="form-edit-privilegio" class="mt-3"></Form>
  </section>
</template>

<script>
export default {
  layout: "dashboard",
  data: () => ({
    items: [
      { text: "Dashoboard", to: "/dashboard/home" },
      { text: "Privilégio", to: "/dashboard/privilegio/listar" },
      { text: "Editar", disabled: true },
    ],
  }),
};
</script>

<style>
</style>