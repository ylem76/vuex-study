<template>
  <h3>{{ counter }}</h3>
</template>
<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.finalCounter;
      // return this.$store.getters.finalCounter(); 함수를 실행할 필요가 없다. 그저 가리키기만 하면 된다.
      // 그렇게 하면 vuex가 알아서 getter 메소드를 실행할 것이다.
      // 실행하면서 현재의 state상태를 getter로 넘기게 될 것이고, getter에서 그것을 계산할 것이다.
    }
  }
};
</script>
