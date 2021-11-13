<template>
  <!-- <HomeTemplate /> -->
  <div class="count">
    {{ $book }}
    <button @click="increment"> Incrementar </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  layout: 'ppv',
  // asyncData() {
  //   console.log(books.books)
  // }
  computed: {
    $book() {
      return books.$book
    }
  },
  methods: {
    increment() {
      books.increment(1)
    }
  }
})
</script>
