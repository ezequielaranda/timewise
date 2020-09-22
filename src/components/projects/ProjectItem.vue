<template>
  <div>
    <p>{{ project.name }}</p> 
    <RemoveButton @remove="removeProject" /> --
    <DisableButton 
      v-show="project.isActive"
      @disable="toggleIsActive"
    />
    <EnableButton 
      v-show="!project.isActive"
      @enable="toggleIsActive"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import RemoveButton from '@/components/ui/RemoveButton.vue'
import DisableButton from '@/components/ui/DisableButton.vue'
import EnableButton from '@/components/ui/EnableButton.vue'
export default {
  name: 'ProjectItem',
  components: {
    DisableButton,
    RemoveButton,
    EnableButton
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

    toggleIsActive() {
      console.log(this.project.isActive)
      this.project.isActive = !this.project.isActive
      this.editProject(this.project)
    },

    removeProject() {
      this.removeProjectById(this.project.projectId)
    }
  }
}
</script>


<style>
 a {
   width: 350px;
 }
</style>