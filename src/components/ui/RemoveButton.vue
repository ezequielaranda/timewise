<template>
  <button @click="remove">Remove</button>
</template>

<script>
export default {
  name: 'RemoveButton',

  methods: {
    remove() {
      this.$emit('remove')
    }
  }
}
</script>

<style>

</style>