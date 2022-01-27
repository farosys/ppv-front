<template>
  <section id="lista-privilegio">
    <h1>Listar Privilégio</h1>
    <Breadcrumbs :items="items"></Breadcrumbs>
    <ListPrivilegio class="mt-3"></ListPrivilegio>
  </section>
</template>

<script>
export default {
  layout: "dashboard",
  data: () => ({
    items: [
      { text: "Dashboard", to: "/dashboard/home" },
      { text: "Privilégio", disabled: true },
    ],
  }),
};
</script>

<style>
</style>