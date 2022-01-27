<template>
  <div class="d-flex space-between content-login">
    <FormLogin class="form-login"></FormLogin>
    <b-img src="@/assets/img/img1.svg" class="img-login"></b-img>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  layout: "default",
});
</script>

<style scoped>
.content-login {
  width: 100%;
  margin-top: 50vh;
  transform: translate(0, -50%);
}
.space-between {
  justify-content: space-between;
}
.form-login {
  width: 55%;
}
.img-login {
  width: 40%;
  height: auto;
}
@media screen and (max-width: 600px) {
  .d-flex {
    flex-direction: column-reverse;
  }
  .content-login {
    margin-top: 50px;
    transform: none;
  }
  .img-login {
    margin-bottom: 12px;
  }
  .form-login,
  .img-login {
    width: 100%;
  }
}
</style>