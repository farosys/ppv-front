import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Books from '@/store/books'
import Categories from '@/store/categories'
import Users from '@/store/users'
 
let books: Books
let categories: Categories
let users: Users
 
function initializeStores(store: Store<any>): void {
  books = getModule(Books, store);
  categories = getModule(Categories, store)
  users = getModule(Users, store)
}
 
export { initializeStores, books, categories, users }