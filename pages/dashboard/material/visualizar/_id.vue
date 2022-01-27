<template>
  <section id="ver-material">
    <h1>Detalhes do Material</h1>
    <Breadcrumbs :items="items"></Breadcrumbs>
    <CardDetailsBook class="mt-3" :livro="livro"></CardDetailsBook>
  </section>
</template>

<script>
import { books } from '@/store';
export default {
  layout: "dashboard",
  async asyncData({params}) {
    await books.show({id: params.id});
  },
  data: () => ({
    items: [
      { text: "Dashboard", to: "/dashboard/home" },
      { text: "Material", to: "/dashboard/material/listar" },
      { text: "Visualizar", disabled: true },
    ],
    livro: []
  }),
  created() {
    this.getMaterial();
  },
  methods: {
    getMaterial() {
      this.livro = books.$single;
    }
  }
};
</script>

<style>
</style>