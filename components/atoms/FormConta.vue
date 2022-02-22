<template>
  <v-form @submit="save">
    <v-row dense>
      <v-col cols="12" sm="6">
        <v-text-field v-model="user.name" label="Nome" outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="user.email"
          label="E-mail"
          type="email"
          outlined
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="senha"
          label="Senha"
          type="password"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="senhaConfirm"
          label="Confirmar Senha"
          type="password"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-btn type="submit" color="success" block>SALVAR</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { users } from "~/store";
export default {
  data: () => ({
    user: [],
    senha: "",
    senhaConfirm: "",
  }),
  computed: {
    id() {
      return users.$loged.id;
    },
  },
  created() {
    this.getUser();
  },
  methods: {
    async getUser() {
      this.user = await this.$axios.$get(`users/${this.id}`);
    },
    save(e) {
      e.preventDefault();
      if (this.senha == this.senhaConfirm) {
        this.$axios
          .put(`/users/${this.id}`, this.user)
          .then(() => {
            this.$emit("alert", {
              type: "success",
              message: "Dados atualizados",
            });
          })
          .catch(() => {
            this.$emit("alert", {
              type: "error",
              message:
                "Erro ao atualizar os dados, tente novamente mais tarde!",
            });
          });
      } else {
        this.$emit("alert", {
          type: "error",
          message: "As senhas não são compatíveis!",
        });
      }
    },
  },
};
</script>

<style>
</style>