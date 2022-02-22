<template>
  <v-app>
    <Toolbar @open-drawer="showDrawer = !showDrawer"></Toolbar>
    <v-navigation-drawer
      v-model="showDrawer"
      width="225"
      color="#212529"
      clipped
      fixed
      app
      dark
    >
      <ItensNavDrawer></ItensNavDrawer>
      <template #[`append`]>
        <AppendDrawer></AppendDrawer>
      </template>
    </v-navigation-drawer>

    <v-main>
      <v-container class="pb-0">
        <transition mode="out-in">
          <Nuxt />
        </transition>
      </v-container>
      <FooterDash class="mt-8"></FooterDash>
    </v-main>
  </v-app>
</template>

<script>
import { users } from '~/store';
export default {
  data: () => ({
    showDrawer: true,
  }),
  created() {
    this.getUserLog()
  },
  methods: {
    async getUserLog() {
      if (window.localStorage.userLog) {
        const id = window.localStorage.userLog
        const user = await this.$axios.$get(`users/${id}`)
        users.login(user)
      }
    }
  }
};
</script>

<style>
.v-main__main,
.container {
  min-height: calc(100% - 84px);
}

.v-enter,.v-leave-to {
  opacity: 0;
  transform: translate3d(-50px, 0, 0);
}
.v-enter-active,.v-leave-active{
  transition: all .4s;
}
</style>