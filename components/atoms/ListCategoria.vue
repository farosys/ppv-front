<template>
  <v-card elevation="5">
    <v-card-text>
      <v-data-table :headers="headers" :items="categorias">
        <template #[`item.actions`]="{item}">
          <div class="mt-1">
            <v-btn color="warning" :to="`/dashboard/categoria/editar/${item.id}`" outlined>
              <v-icon>mdi-pencil-box-outline</v-icon>
            </v-btn>
            <v-btn color="error" outlined>
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        text: "#",
        value: "id",
        width: "50px"
      },
      {
        text: "Categoria",
        value: "title",
      },
      {
        text: "Ações",
        value: "actions",
      },
    ],
    categorias: [],
  }),
  created() {
    this.getCategorias();
  },
  methods: {
    async getCategorias() {
      this.categorias = await this.$axios.$get("/categoria");
    },
  },
};
</script>

<style>
</style>