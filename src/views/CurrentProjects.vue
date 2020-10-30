<template>
  <div>
    <p 
      class="title"
    >
      Your other projects...
    </p>
    <ProjectList :projectlist="projectList" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProjectList from '@/components/projects/ProjectList.vue'
export default {
  name: 'CurrentProjects',
  components: {
    ProjectList
  },

  data() {
    return {
      loading: true,
      projectList: []
    }
  },

  computed: {
    ...mapGetters({
      'getCurrentUser': 'users/getCurrentUser',
      'getActiveProjectsByUserId': 'projects/getActiveProjectsByUserId'
    }),
  },

  mounted() {
    this.projectList = this.getActiveProjectsByUserId(this.getCurrentUser.userId)
  },

}
</script>

<style lang="scss" scoped>

.title {
  margin-top: 30px;
  margin-left: 20px;
 }

</style>
