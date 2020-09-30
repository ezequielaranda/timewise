<template>
  <div>
    <p 
      class="title"
    >
      <strong>Your Projects</strong>
    </p>
    <ProjectList />
  </div>
</template>

<script>
import ProjectList from '@/components/projects/ProjectList.vue'
export default {
  name: 'CurrentProjects',
  components: {
    ProjectList
  },

}
</script>

<style lang="scss" scoped>

.title {
  margin-top: 30px;
  margin-left: 20px;
 }

</style>
