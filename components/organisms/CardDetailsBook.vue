<template>
  <v-card width="100%" elevation="5" outlined>
    <v-row class="book-details">
      <v-col cols="12" sm="4">
        <v-img :lazy-src="imageSrc" :src="imageSrc"></v-img>
      </v-col>
      <v-col cols="12" sm="8">
        <div class="pt-4 px-8">
          <DetailsMaterial :livro="livro"></DetailsMaterial>
          <BtnCapa :link="`https://portalpalavraviva.com.br/storage/covers/${livro.cover}`"></BtnCapa>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    livro: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    imageSrc:
      "https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg",
  }),
};
</script>

<style socped>
@media screen and (max-width: 600px) {
  .book-details {
    flex-direction: column-reverse;
  }
}
</style>