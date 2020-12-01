<template>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>

  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">add 10</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import favoriteValue from './components/favoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    favoriteValue,
    UserAuth
  },

  methods: {
    addOne() {
      //this.$store.state.counter++;
      //app의 메소드에서 store 데이터를 직접 건드리는 것은 비추

      //this.$store.commit('increase', { value: 10 });
      // commit 빌트인 메소드 뮤테이션 안에 정의한 메소드 불러오기

      this.$store.dispatch({
        type: 'increase',
        value: 10
      });
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
