<template>
  <section id="lista-categoria">
    <h1>Listar Categoria</h1>
    <Breadcrumbs :items="items"></Breadcrumbs>

    <v-alert
      v-model="showAlert"
      :type="typeAlert"
      class="mt-3"
      transition="slide-y-transition"
      dismissible
    >
      {{ messageAlert }}
    </v-alert>

    <ListCategoria class="mt-3" @alert="alerta"></ListCategoria>
  </section>
</template>

<script>
import { categories } from '@/store';

export default {
  layout: "dashboard",
  async asyncData() {
    await categories.index()
  },
  data: () => ({
    items: [
      { text: "Dashoboard", to: "/dashboard/home" },
      { text: "Categoria", disabled: true },
    ],
    showAlert: false,
    typeAlert: '',
    messageAlert: '',
  }),
  methods: {
    alerta(obj) {
      this.messageAlert = obj.message;
      this.typeAlert = obj.type;
      this.showAlert = true;
    }
  }
};
</script>

<style>
</style>