<template>
  <v-card outlined elevation="0">
    <v-toolbar dense elevation="0" color="#f7f7f7">
      <v-toolbar-title>
        <v-icon>mdi-chart-line</v-icon>
        Chart Example
      </v-toolbar-title>
    </v-toolbar>
    <v-divider class="mt-0"></v-divider>
    <div class="content-card"></div>
  </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
.content-card{
    min-height: 100px;
}
</style>