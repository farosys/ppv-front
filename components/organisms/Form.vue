<template>
  <v-card width="100%" elevation="0" outlined>
    <v-card-text>
        <v-component :is="form"></v-component>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
    props: {
        form: {
            type: String,
            default: ""
        }
    }
};
</script>

<style>
</style>