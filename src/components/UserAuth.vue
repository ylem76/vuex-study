<template>
  <button @click="login" v-if="!isAuth">Login</button>
  <button @click="logout" v-if="isAuth">Logout</button>
</template>

<script>
//01 login이 바인딩된 버튼을 누르면 페이지 methods:login을 실행한다
//02 login 메소드: store actions에 저장된 login 메소드를 가져온다.
//03 actions에 저장된 login : context.commit('setAuth', { isAuth: true }); isAuth state를 true로 변경한다.
//04 mutation setAuth의 isAuth(payload)를 true로 바꾼다.
//05 mutaion setAuth : state.isLoggedIn = payload.isAuth;
//05 isAuth가 true로 변경되면 state.isLoggedIn은 payload의 isAuth값에 따라 변경된다.
//state의 isLoggedIn은 payload isAuth의 값을 받아와서 업데이트 한다.
//드디어 state isLoggedIn이 변경됐다. 쨘쨘
//06 getters의 userIsAuthenticated가 isLoggedIn에 따라 업데이트 된다.
//07 computed가 userIsAuthenticated의 상태변경을 감지하고 isAuth를 업데이트 한다.
//08 isAuth가 true면 로그인 버튼이 보이지 않고, 로그아웃 버튼이 렌더링된다.
//09 isAuth가 false면 로그아웃 버튼이 보이지 않고, 로그인 버튼이 렌더링된다.

export default {
  // menually add action
  methods: {
    login() {
      this.$store.dispatch('login');
      //store actions에 저장된 login 메소드를 가져온다.
    },
    logout() {
      this.$store.dispatch('logout');
      //store actions에 저장된 logout 메소드를 가져온다.
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
      //getters userIsAuthenticated의 상태가 변경될 때마다(computed) 업데이트한다.
    }
  }
};
</script>
