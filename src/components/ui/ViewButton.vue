<template>
  <button
    @click="view"
  >
    View
  </button>
</template>

<script>
export default {
  name: 'ViewButton',

  methods: {
    view() {
      this.$emit('view')
    }
  }
}
</script>

<style>

</style>