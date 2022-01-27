<template>
  <div>
    <v-list dark dense>
      <v-subheader>GERAL</v-subheader>
      <v-list-item link to="/dashboard/home">
        <v-list-item-icon class="mr-2">
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title> Página Inicial </v-list-item-title>
      </v-list-item>

      <v-subheader>CONTEÚDO</v-subheader>

      <ItensConteudo></ItensConteudo>
    </v-list>
  </div>
</template>

<script>
export default {
  
};
</script>

<style>
.v-list-item {
  width: 100% !important;
  justify-content: space-between !important;
}
</style>