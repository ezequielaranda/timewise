<template>
  <button
    @click="disable"
  >
    Disable
  </button>
</template>

<script>
export default {
  name: 'DisableButton',

  methods: {
    disable() {
      this.$emit('disable')
    }
  }
}
</script>

<style>

</style>