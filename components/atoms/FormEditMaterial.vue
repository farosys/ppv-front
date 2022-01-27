<template>
  <v-form>
    <v-row dense>
      <v-col cols="12" sm="4">
        <v-text-field label="Título" outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="4">
        <v-text-field label="Referência" outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="4">
        <v-select :items="options" label="Restrito" outlined></v-select>
      </v-col>

      <v-col cols="12" sm="4">
        <v-select :items="options" label="Categoria" outlined></v-select>
      </v-col>
      <v-col cols="12" sm="4">
        <v-file-input
          label="Imagem"
          accept="image/*"
          prepend-icon="mdi-image"
          outlined
        ></v-file-input>
      </v-col>
      <v-col cols="12" sm="4">
        <v-file-input
          label="Arquivo"
          prepend-icon="mdi-file-document"
          outlined
        ></v-file-input>
      </v-col>

      <v-col cols="12" sm="12">
        <v-textarea label="Resumo" outlined></v-textarea>
      </v-col>
    </v-row>
    <v-btn color="success" block>SALVAR</v-btn>
  </v-form>
</template>

<script>
export default {
   data: () => ({
    options: ["Sim", "Não"],
  }),
};
</script>

<style>
</style>