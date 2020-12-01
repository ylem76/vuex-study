import { createApp } from 'vue';
// vuex import
import { createStore } from 'vuex';

import App from './App.vue';

// Create a new store instance.
const store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false
    };
  },
  mutations: {
    increment(state) {
      //change state
      //state.counter++;
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    }
  },
  actions: {
    increment(context) {
      //mutation과 동일한 이름 사용 가능
      //context : vuex 기본 인자
      setTimeout(function() {
        context.commit('increment');
        //payload 등도 사용 가능
      }, 2000);
      //2초 뒤에 increment를 commit한다.
    },
    increase(context, payload) {
      console.log(context);
      context.commit('increase', payload);
    },
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizedCounter(_, getters) {
      // _ : 두번째 인수를 사용하기 위해 빈칸을 다음과 같이 적는다.
      //변수 finalCounter는 getters에 정의한 finalCounter와 동일하다.

      //다른 getters 이용해서 작업하기
      const finalCounter = getters.finalCounter;

      //const finalCounter = state.counter * 3;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
    userIsAuthenticated(state) {
      return state.isLoggedIn;
      //mutation의 isLoggedIn 상태를 업데이트 한다.
    }
  }
});

const app = createApp(App);

// app 에서 store 사용할 수 있도록 inject
// 이제 개별 컴포넌트, 앱에서 따로 임포트 하지 않고 store에 있는 변수 사용 가능하다.
app.use(store);
app.mount('#app');
