<template>
  <section id="minha-conta">
    <h1>Meus Dados</h1>
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

    <Form form="form-conta" class="mt-3" @alert="alerta"></Form>
  </section>
</template>

<script>
export default {
  layout: "dashboard",
  data: () => ({
    items: [
      { text: "Dashboard", to: "/dashboard/home" },
      { text: "Minha Conta", disabled: true },
    ],
    showAlert: false,
    typeAlert: "success",
    messageAlert: "",
  }),
  methods: {
    alerta(obj) {
      this.typeAlert = obj.type;
      this.messageAlert = obj.message;
      this.showAlert = true
    },
  },
};
</script>

<style>
</style>