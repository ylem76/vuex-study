<template>
  <button @click="addOne">add 2</button>
</template>
<script>
export default {
  methods: {
    addOne() {
      this.$store.commit('increment');
    }
  }
};
</script>
