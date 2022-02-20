<template>
  <div class="book-cover">
    <img :src="`https://portalpalavraviva.com.br/storage/covers/${$book.cover}`" :alt="`Capa do livro ${$book.title}`">

    <a class="read-book" :href="`https://portalpalavraviva.com.br/storage/books/${$book.book}`" target="_blank">
      Ler livro
    </a>
  </div>
</template>

<script>
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  computed: {
    $book() {
      return books.$single.article
    }
  }
})
</script>

<style lang="scss" scoped>
.book-cover {
  img {
    width: 100%;
  }
  .read-book {
    background: #292929;
    color: #f7f7f7;
    text-transform: uppercase;
    font-weight: 700;
    width: 100%;
    height: 42px;
    font-size: 1.1rem;
    display: grid;
    justify-content: center;
    align-items: center;
    transition: all 300ms ease;
    &:hover {
      opacity: 0.89;
    }
  }
}
</style>