<template>
  <v-form>
      <v-row dense>
          <v-col cols="12" sm="6">
              <v-text-field label="Nome" outlined></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
              <v-text-field label="E-mail" type="email" outlined></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
              <v-text-field label="Senha" type="password" outlined></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
              <v-text-field label="Confirmar Senha" type="password" outlined></v-text-field>
          </v-col>
          <v-col cols="12">
              <v-btn color="success" block>SALVAR</v-btn>
          </v-col>
      </v-row>
  </v-form>
</template>

<script>
export default {

}
</script>

<style>

</style>