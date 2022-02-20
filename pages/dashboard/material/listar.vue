<template>
  <section>
    <v-dialog
      v-model="showModal"
      max-width="600px"
      @close="showModal = !showModal"
    >
      <ModalDelete :route="route" @alert="alerta"></ModalDelete>
    </v-dialog>

    <h1>Listar Material</h1>
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

    <TableMaterial class="mt-3" @delete="confirmDelete"></TableMaterial>
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
    showAlert: false,
    typeAlert: "success",
    messageAlert: "",
    showModal: false,
    key: "",
    route: "articles",
  }),
  methods: {
    confirmDelete(id) {
      books.show({ id });
      this.showModal = true;
    },
    alerta(obj) {
      if (obj.type == "success") {
        books.index();
      }
      this.showModal = false
      this.showAlert = true;
      this.typeAlert = obj.type;
      this.messageAlert = obj.message;
    },
  },
};
</script>

<style>
</style>