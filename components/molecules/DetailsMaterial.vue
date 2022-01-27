<template>
  <div>
      <b class="text-h5"># {{livro.id}}</b>
      <div class="mt-6">
          <Detail v-for="(detail, key) in livro" :key="key" :detail="{key, detail}"></Detail>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        livro: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style>

</style>