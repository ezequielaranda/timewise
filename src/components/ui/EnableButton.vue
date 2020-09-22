<template>
  <button
    @click="enable"
  >
    Enable
  </button>
</template>

<script>
export default {
  name: 'EnableButton',

  methods: {
    enable() {
      this.$emit('enable')
    }
  }
}
</script>

<style>

</style>