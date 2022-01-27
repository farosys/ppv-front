<template>
  <section id="minha-conta">
    <h1>Meus Dados</h1>
    <Breadcrumbs :items="items"></Breadcrumbs>
    <Form form="form-conta" class="mt-3"></Form>
  </section>
</template>

<script>
export default {
  layout: "dashboard",
  data: () => ({
    items: [
      { text: "Dashboard", to: '/dashboard/home' },
      { text: "Minha Conta", disabled: true },
    ],
  }),
};
</script>

<style>
</style>