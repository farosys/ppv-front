import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { User } from '@/models'
import { $axios } from '~/utils/nuxt-instance'

interface Show {
  id: User['id']
}

@Module({ name: 'users', stateFactory: true, namespaced: true })
export default class Users extends VuexModule {
  private users = [] as User[]
  private user = {} as User
  private userLog = {} as User

  public get $all() {
    return this.users
  }
  public get $single() {
    return this.users
  }
  public get $loged() {
    return this.userLog
  }

  @Mutation
  private SET_ALL(users: User[]) {
    this.users = users
  }

  @Mutation
  private SET_SINGLE(user: User) {
    this.user = user
  }

  @Mutation
  private SET_LOGED(user: User) {
    this.userLog = user
  }

  @Action
  public async index() {
    const users = await $axios.$get('/articles')
    this.context.commit('SET_ALL', users)
  }

  @Action
  public async show({ id }: Show) {
    const user = await $axios.$get(`/articles/${id}`)
    this.context.commit('SET_SINGLE', user)
  }

  @Action
  public async login(user: User) {
    this.context.commit('SET_LOGED', user)
  }
}