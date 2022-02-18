<template>
  <v-card elevation="5">
    <v-card-text>
      <v-data-table :headers="headers" :items="categorias">
        <template #[`item.actions`]="{ item }">
          <div class="mt-1">
            <v-btn
              color="warning"
              :to="`/dashboard/categoria/editar/${item.id}`"
              outlined
            >
              <v-icon>mdi-pencil-box-outline</v-icon>
            </v-btn>
            <v-btn color="error" outlined @click="excluir(item.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import { categories } from "~/store";
export default {
  data: () => ({
    headers: [
      {
        text: "#",
        value: "id",
        width: "50px",
      },
      {
        text: "Categoria",
        value: "name",
      },
      {
        text: "Ações",
        value: "actions",
        width: "200px",
      },
    ],
  }),
  computed: {
    categorias() {
      return categories.$all;
    },
  },
  methods: {
    excluir(id) {
      this.$axios
        .delete(`categories/${id}`)
        .then(() => {
          categories.index();
          this.$emit("alert", {
            type: "success",
            message: "Categoria excluída com sucesso!",
          });
        })
        .catch(() => {
          this.$emit("alert", {
            type: "error",
            message: "Falha ao excluír, tente novamente mais tarde!",
          });
        });
    },
  },
};
</script>

<style>
</style>