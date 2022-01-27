<template>
  <div>
    <p class="text-h4 mb-0">Entre no <b>Painel de Controle</b></p>
    <p class="text-caption">Portal Palavra Viva</p>
    <v-form @submit="login">
      <v-text-field v-model="email" label="E-mail"></v-text-field>
      <v-text-field
        v-model="senha"
        label="Senha"
        type="password"
      ></v-text-field>
      <v-checkbox
        v-model="lembrar"
        color="success"
        label="Me Lembre"
        class="mt-0"
      ></v-checkbox>
      <v-btn color="success" block dark>LOGIN</v-btn>
      <!-- <b-button variant="success" block> LOGIN </b-button> -->
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    lembrar: true,
    email: "",
    senha: "",
  }),
  methods: {
    login(e) {
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
.text-h1 {
  font-size: 2.2ch;
}
</style>