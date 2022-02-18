<template>
  <section id="cad-categoria">
    <h1>Cadastrar Categoria</h1>
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

    <Form form="form-new-categoria" class="mt-3" @alert="alerta"></Form>
  </section>
</template>

<script>
export default {
  layout: "dashboard",
  data: () => ({
    items: [
      { text: "Dashoboard", to: "/dashboard/home" },
      { text: "Categoria", to: "/dashboard/categoria/listar" },
      { text: "Cadastrar", disabled: true },
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