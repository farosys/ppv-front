<template>
  <v-form @submit="update">
    <v-text-field
      label="Título"
      v-model="categoria.name"
      outlined
    ></v-text-field>
    <v-btn type="submit" color="success" block>SALVAR</v-btn>
  </v-form>
</template>

<script>
import { categories } from "@/store";
export default {
  data: () => ({
    categoria: {},
  }),
  computed: {
    category() {
      return categories.$single;
    },
  },
  mounted() {
    this.getCategoria();
  },
  methods: {
    async getCategoria() {
      this.categoria = await this.$axios.$get(`categories/${this.category.id}`);
    },
    update(e) {
      e.preventDefault();

      this.$axios
        .put(`categories/${this.category.id}`, { name: this.categoria.name })
        .then(() => {
          this.$emit("alert", {
            type: "success",
            message: "Categoria editada com sucesso!",
          });
        });
    },
  },
};
</script>

<style>
</style>