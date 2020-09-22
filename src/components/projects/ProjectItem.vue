<template>
  <div>
    <a>{{ project.name }}</a> | 
    <RemoveButton @remove="removeProject" /> --
    <DisableButton @disable="disableProject" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
  },

  methods: {
    ...mapActions({
      'editProject': 'projects/editProject',
      'removeProjectById': 'projects/removeProjectById'
      
    }),

    disableProject() {
      this.project.isActive = !this.project.isActive
      this.editProject(this.project)
    },

    removeProject() {
      console.log(this.project.projectId)
      this.removeProjectById(this.project.projectId)
    }
  }
}
</script>


<style>

</style>