<template>
  <div>
    <p class="text-h4 mb-0">Entre no <b>Painel de Controle</b></p>
    <p class="text-caption">Portal Palavra Viva</p>
    <v-form @submit="login">
      <v-text-field v-model="email" name="email" label="E-mail"></v-text-field>
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
      <v-btn type="submit" color="success" block dark>LOGIN</v-btn>
    </v-form>
  </div>
</template>

<script>
import { users } from '~/store';
export default {
  data: () => ({
    lembrar: true,
    email: "",
    senha: "",
    users: [],
  }),
  created() {
    this.getUsers();
  },
  methods: {
    login(e) {
      e.preventDefault();

      let user = null;
      this.users.forEach(element => {
        if (element.email == this.email) user = element;
      });

      if (user == null) {
      }else{
        users.login(user)
        window.localStorage.userLog = user.id;
        this.$router.push({path: '/dashboard/home'})
      }
    },
    async getUsers() {
      this.users = await this.$axios.$get('users');
    }
  },
};
</script>

<style scoped>
.text-h1 {
  font-size: 2.2ch;
}
</style>