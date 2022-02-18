<template>
  <v-form @submit="cadCategory">
    <v-text-field label="Título" v-model="name" outlined></v-text-field>
    <v-btn type="submit" color="success" block>CADASTRAR</v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    name: "",
  }),
  methods: {
    cadCategory(e) {
      e.preventDefault();

      const slug = this.name.toLowerCase();
      this.$axios
        .post("categories", { name: this.name, slug })
        .then(() => {
          this.$emit("alert", {
            type: "success",
            message: "Categoria cadastrada com sucesso!",
          });
        })
        .catch(() => {
          this.$emit("alert", {
            type: "error",
            message: "Não foi possível cadastrar, verifique os campos e tente novamente!",
          });
        });
    },
  },
};
</script>

<style>
</style>