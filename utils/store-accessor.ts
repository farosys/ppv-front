import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Books from '@/store/books'
import Categories from '@/store/categories'
 
let books: Books
let categories: Categories
 
function initializeStores(store: Store<any>): void {
  books = getModule(Books, store);
  categories = getModule(Categories, store)
}
 
export { initializeStores, books, categories }