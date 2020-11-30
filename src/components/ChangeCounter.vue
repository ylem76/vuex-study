<template>
  <button @click="addOne">add 2</button>
</template>
<script>
export default {
  methods: {
    addOne() {
      //this.$store.commit('increment');
      this.$store.dispatch('increment');
    }
  }
};
</script>
