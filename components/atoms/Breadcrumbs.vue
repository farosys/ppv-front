<template>
    <v-breadcrumbs :items="items" large class="grey lighten-2 rounded"></v-breadcrumbs>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => {}
        }
    }
}
</script>

<style>

</style>