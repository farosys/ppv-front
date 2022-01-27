<template>
  <section>
    <h1>Listar Material</h1>
    <Breadcrumbs :items="items"></Breadcrumbs>
    <TableMaterial class="mt-3"></TableMaterial>
  </section>
</template>

<script>
import { books } from "@/store";
export default {
  layout: "dashboard",
  async asyncData() {
    await books.index();
  },
  data: () => ({
    items: [
      { text: "Dashboard", to: "/dashboard/home" },
      { text: "Material", disabled: true },
    ],
  }),
};
</script>

<style>
</style>