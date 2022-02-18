<template>
  <section id="editar-categoria">
    <h1>Editar Categoria</h1>
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

    <Form form="form-edit-categoria" class="mt-3" @alert="alerta"></Form>
  </section>
</template>

<script>
import { categories } from "@/store";
export default {
  layout: "dashboard",
  async asyncData({ route }) {
    await categories.show({ id: route.params.id });
  },
  data: () => ({
    items: [
      { text: "Dashoboard", to: "/dashboard/home" },
      { text: "Categoria", to: "/dashboard/categoria/listar" },
      { text: "Editar", disabled: true },
    ],
    showAlert: false,
    messageAlert: '',
    typeAlert: '',
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