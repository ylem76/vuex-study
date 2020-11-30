import { createApp } from 'vue';
// vuex import
import { createStore } from 'vuex';

import App from './App.vue';

// Create a new store instance.
const store = createStore({
  state() {
    return {
      counter: 0
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
    }
  }
});

const app = createApp(App);

// app 에서 store 사용할 수 있도록 inject
// 이제 개별 컴포넌트, 앱에서 따로 임포트 하지 않고 store에 있는 변수 사용 가능하다.
app.use(store);
app.mount('#app');
