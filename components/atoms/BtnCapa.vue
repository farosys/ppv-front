<template>
  <v-btn :href="link" color="primary" target="_blank" link outlined>Capa</v-btn>
</template>

<script>
export default {
    props: {
        link: {
            typeof: String,
            default: ""
        }
    }
}
</script>

<style>

</style>