<template>
  <h3>{{ finalCounter }}</h3>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    //counter() {
    //return this.$store.getters.finalCounter;
    // return this.$store.getters.finalCounter(); 함수를 실행할 필요가 없다. 그저 가리키기만 하면 된다.
    // 그렇게 하면 vuex가 알아서 getter 메소드를 실행할 것이다.
    // 실행하면서 현재의 state상태를 getter로 넘기게 될 것이고, getter에서 그것을 계산할 것이다.
    //}
    ...mapGetters(['finalCounter'])
    //mapGetters 여러가지 getters를 불러오는 코드, 여러 개의 getters를 불러올 수 있다.
    //이대로 적으면 이전 코드와 동일하게 동작한다. 대신, finalCounters를 mapGetters로 불러온 모습
  }
};
</script>
