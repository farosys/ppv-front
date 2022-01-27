<template>
  <div>
    <v-list-group
      v-for="link in itemsConteudo"
      :key="link.text"
      :prepend-icon="link.icon"
      no-action
    >
      <template #[`activator`]>
        {{ link.text }}
      </template>
      <v-list-item v-if="link.new !== undefined" link :to="link.new">
        <v-list-title>Cadastrar</v-list-title>
      </v-list-item>
      <v-list-item v-if="link.list !== undefined" link :to="link.list">
        <v-list-title>Listar</v-list-title>
      </v-list-item>
    </v-list-group>
  </div>
</template>

<script>
export default {
  data: () => ({
    itemsConteudo: [
      {
        text: "Material",
        icon: "mdi-book-open-variant",
        new: "/dashboard/material/cadastro",
        list: "/dashboard/material/listar",
      },
      {
        text: "Evento",
        icon: "mdi-calendar-month",
        new: "/dashboard/evento/cadastro",
        list: "/dashboard/evento/listar",
      },
      {
        text: "Categoria",
        icon: "mdi-shape-plus",
        new: "/dashboard/categoria/cadastro",
        list: "/dashboard/categoria/listar",
      },
      {
        text: "Privilégio",
        icon: "mdi-account-lock",
        new: "/dashboard/privilegio/cadastro",
        list: "/dashboard/privilegio/listar",
      },
    ],
  }),
};
</script>

<style>
</style>