<template>
  <v-card elevation="5">
    <v-card-text>
      <v-data-table :headers="headers" :items="eventos">
        <template #[`item.actions`]="{item}">
          <div class="mt-1">
              <v-btn color="info" :to="`/dashboard/evento/visualizar/${item.id}`" link outlined>
                  <v-icon>mdi-eye</v-icon>
              </v-btn>
            <v-btn color="warning" :to="`/dashboard/evento/editar/${item.id}`" link outlined>
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
                text: '#',
                value: 'id',
                width: '50px'
            },
            {
                text: 'Título',
                value: 'title',
            },
            {
                text: 'Início',
                value: 'inicio',
            },
            {
                text: 'Fim',
                value: 'fim',
            },
            {
                text: 'Ações',
                value: 'actions'
            }
        ],
        eventos: []
    }),
    created() {
        this.getEventos();
    },
    methods: {
        async getEventos() {
            this.eventos = await this.$axios.$get('/eventos')
        }
    }
}
</script>

<style>

</style>