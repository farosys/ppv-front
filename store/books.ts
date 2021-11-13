import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  private book = 0

  public get $book() {
    return this.book
  }

  @Mutation
  private INCREMENT(number: number) {
    this.book += number
  }

  @Action
  public increment(number: number) {
    this.context.commit('INCREMENT', number)
  }
}