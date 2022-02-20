<template>
  <v-form @submit="cadMaterial">
    <v-row dense>
      <v-col cols="12" sm="4">
        <v-text-field
          label="Título"
          v-model="title"
          name="tituloMaterial"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="4">
        <v-text-field label="Referência" outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="4">
        <v-select
          :items="options"
          label="Restrito"
          v-model="restriction"
          outlined
        ></v-select>
      </v-col>

      <v-col cols="12" sm="4">
        <v-select
          :items="categorias"
          v-model="categoriesSelecteds"
          item-text="name"
          item-value="id"
          label="Categoria"
          outlined
          multiple
        ></v-select>
      </v-col>
      <v-col cols="12" sm="4">
        <v-file-input
          label="Imagem"
          v-model="cover"
          name="coverMaterial"
          accept="image/*"
          prepend-icon="mdi-image"
          outlined
        ></v-file-input>
      </v-col>
      <v-col cols="12" sm="4">
        <v-file-input
          label="Arquivo"
          v-model="archive"
          accept=".pdf, .pptx"
          prepend-icon="mdi-file-document"
          outlined
        ></v-file-input>
      </v-col>

      <v-col cols="12" sm="12">
        <v-textarea label="Resumo" v-model="resume" outlined></v-textarea>
      </v-col>
    </v-row>
    <v-btn type="submit" color="success" block>CADASTRAR</v-btn>
  </v-form>
</template>

<script>
import { categories } from '@/store'

export default {
  data: () => ({
    title: "",
    resume: "",
    cover: null,
    content: "",
    archive: null,
    restriction: "",
    categoriesSelecteds: [],
    options: ["Sim", "Não"],
  }),
  computed: {
    categorias() {
      return categories.$all;
    }
  },
  methods: {
    cadMaterial(e) {
      e.preventDefault();

      const formData = new FormData();
      const restrito = this.restriction == "Sim" ? 1 : 0;

      formData.append("title", this.title);
      formData.append("slug", this.title.toLowerCase());
      formData.append("cover", this.cover);
      formData.append("book", this.archive);
      formData.append("resume", this.resume);
      formData.append("restriction", restrito);
      formData.append("users", '[1]');
      formData.append("categories", JSON.stringify(this.categoriesSelecteds));

      this.$axios.post("articles", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then(()=>{
        this.$emit("alert", {type: 'success', message: 'Material Cadastrado com sucesso!'})
      });
    },
  },
};
</script>

<style>
</style>