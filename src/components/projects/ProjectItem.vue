<template>
  <div>
    <a>{{ project.name }}</a> | 
    <RemoveButton /> --
    <DisableButton />
  </div>
</template>

<script>
import RemoveButton from '@/components/ui/RemoveButton.vue'
import DisableButton from '@/components/ui/DisableButton.vue'
export default {
  name: 'ProjectItem',
  components: {
    DisableButton,
    RemoveButton
  },
  props: {
    project: {
      type: Object,
      default: null
    },
  }
}
</script>


<style>

</style>