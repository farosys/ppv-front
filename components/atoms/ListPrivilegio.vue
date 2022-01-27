<template>
  <v-card elevation="5" outlined>
    <v-card-text>
      <v-data-table :headers="headers" :items="privilegios">
        <template #[`item.actions`]="{item}">
          <div class="mt-1">
            <v-btn color="warning" :to="`/dashboard/privilegio/editar/${item.id}`" outlined>
              <v-icon>mdi-pencil-box-outline</v-icon>
            </v-btn>
            <v-btn color="error" outlined>
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        text: "#",
        value: "id",
        width: "50px",
      },
      {
        text: "Título",
        value: "title",
        width: "50%"
      },
      {
        text: "Ações",
        value: "actions",
      },
    ],
    privilegios: [],
  }),
  created() {
    this.getPriv();
  },
  methods: {
    async getPriv() {
      this.privilegios = await this.$axios.$get("/privilegios");
    },
  },
};
</script>

<style>
</style>