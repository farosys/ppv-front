<template>
  <section id="cad-material">
    <h1>Cadastrar Material</h1>
    <Breadcrumbs :items="items"></Breadcrumbs>

    <v-alert
      v-model="showAlert"
      :type="typeAlert"
      transition="slide-y-transition"
      dismissible
      class="mt-3"
    >
      {{ messageAlert }}
    </v-alert>

    <Form form="form-new-material" class="mt-3" @alert="alerta"></Form>
  </section>
</template>

<script>
import { categories } from "~/store";

export default {
  async asyncData() {
    await categories.index();
  },
  layout: "dashboard",
  data: () => ({
    items: [
      { text: "Dashboard", to: "/dashboard/home" },
      { text: "Material", to: "/dashboard/material/listar" },
      { text: "Cadastro", disabled: true },
    ],
    showAlert: false,
    typeAlert: "succsess",
    messageAlert: "",
  }),
  methods: {
    alerta(obj) {
      this.typeAlert = obj.type;
      this.messageAlert = obj.message;
      this.showAlert = true;
    },
  },
};
</script>

<style>
</style>