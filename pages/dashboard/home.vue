<template>
  <section id="home-dash">
    <h1>Página Inicial</h1>
    <Breadcrumbs :items="items"></Breadcrumbs>
    <CardsDash></CardsDash>
    <CardChart></CardChart>
  </section>
</template>

<script>
export default {
  layout: "dashboard",
  data: () => ({
    items: [{ text: "Página Inicial", disabled: true }],
  }),
};
</script>