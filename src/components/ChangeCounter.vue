<template>
  <button @click="increaseCall">increment add</button>
  <button @click="increase({ value: 11 })">increase add</button>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    //   //this.$store.commit('increment');
    //   this.$store.dispatch('increment');
    // }
    // ...mapActions(['increment', 'increase'])
    // 액션과 부르는 키가 같을 때
    ...mapActions({
      //액션과 부르는 키를 다르게 설정할 때
      increaseCall: 'increment', //template에서 increaseCall / 실제 action에서 increment
      increase: 'increase' //template에서 increase / 실제 action에서 increase
    })
  }
};
</script>
