<template>
  <v-form>
    <v-row dense>
      <v-col cols="12" sm="4">
        <v-text-field label="Título" outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="4">
        <v-text-field
          label="Data de Início"
          type="date"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="4">
        <v-text-field
          label="Data de Término"
          type="date"
          outlined
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="4">
        <v-file-input
          label="Capa"
          accept="images/*"
          prepend-icon="mdi-image"
          outlined
        ></v-file-input>
      </v-col>
      <v-col cols="12" sm="4">
        <v-text-field label="Valor" outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="4">
        <v-text-field label="Local" outlined></v-text-field>
      </v-col>

      <v-col cols="12" sm="12">
        <v-textarea label="Descrição" outlined></v-textarea>
      </v-col>
    </v-row>
    <v-btn color="success" block>SALVAR</v-btn>
  </v-form>
</template>

<script>
export default {};
</script>

<style>
</style>