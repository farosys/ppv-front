<template>
  <section id="cadastrar-privilegio">
    <h1>Cadastrar Privilégio</h1>
    <Breadcrumbs :items="items"></Breadcrumbs>
    <Form form="form-new-privilegio" class="mt-3"></Form>
  </section>
</template>

<script>
export default {
  layout: "dashboard",
  data: () => ({
    items: [
      { text: "Dashoboard", to: "/dashboard/home" },
      { text: "Privilégio", to: "/dashboard/privilegio/listar" },
      { text: "Cadastrar", disabled: true },
    ],
  }),
};
</script>

<style>
</style>