<template>
  <section id="lista-eventos">
    <h1>Listar Eventos</h1>
    <Breadcrumbs :items="items"></Breadcrumbs>
    <ListEventos class="mt-3"></ListEventos>
  </section>
</template>

<script>
export default {
  layout: "dashboard",
  data: () => ({
    items: [
      { text: "Dashboard", to: "/dashboard/home" },
      { text: "Evento", disabled: true },
    ],
  }),
};
</script>

<style>
</style>