<template>
  <v-card>
    <v-toolbar elevation="0" color="warning"
      >Deseja mesmo excluir este item</v-toolbar
    >
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="success" @click="deleter">EXCLUIR</v-btn>
      <v-btn color="secondary" @click="close">CANCELAR</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { books, categories } from "~/store";
export default {
  props: {
    route: {
      type: String,
      default: "",
    },
  },
  computed: {
    key() {
      let key = null;
      if (this.route == "articles") {
        key = books.$single.article.id;
      } else if (this.route == "categories") {
        key = categories.$single.id;
      }
      return key;
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    deleter() {
      this.$axios
        .delete(`${this.route}/${this.key}`)
        .then(() => {
          this.$emit("alert", {
            type: "success",
            message: "Material excluido com sucesso!",
          });
        })
        .catch(() => {
          this.$emit("alert", {
            type: "error",
            message: "Erro ao excluir, tente novamente mais tarde!",
          });
        });
    },
  },
};
</script>

<style>
</style>