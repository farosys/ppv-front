import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Category } from '@/models/'
import { $axios } from '~/utils/nuxt-instance'

interface Show {
  id: Category['id']
}

@Module({ name: 'categories', stateFactory: true, namespaced: true })
export default class Categories extends VuexModule {
  private categories = [] as Category[]
  private category = {} as Category

  public get $all() {
    return this.categories
  }
  public get $single() {
    return this.category
  }

  @Mutation
  private SET_ALL(categories: Category[]) {
    this.categories = categories
  }

  @Mutation
  private SET_SINGLE(category: Category) {
    this.category = category
  }

  @Action
  public async index() {
    const categorias = await $axios.$get('categories')
    this.context.commit('SET_ALL', categorias)
  }

  @Action
  public async show({ id }: Show) {
    const category = await $axios.$get(`/categories/${id}`)
    this.context.commit('SET_SINGLE', category)
  }
}