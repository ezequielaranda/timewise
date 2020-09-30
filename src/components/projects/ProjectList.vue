<template>
  <div
    v-if="!loading"
  >
    <ul
      id="example-1"
    >
      <li
        v-for="(item, i) in allProjects" 
        :key="`item-${i}`"
      >
        <ProjectItem :project="item" />
      </li>
    </ul>
  </div>
  <div
    v-else
  >
    Loading...
  </div>
</template>



<script>

import {mapState, mapActions} from 'vuex'
import ProjectItem from './ProjectItem'


export default {
  name: 'ProjectList',
  components: {
    ProjectItem
  },

  data() {
    return {
      loading: true
    }
  },

  computed: {
    ...mapState('projects', [
      'allProjects'
    ]),
  },

  mounted() {
    this.loading = true
    this.fetchProjects()
    this.loading = false
  },

  methods: {
    ...mapActions({
      // 'addMessageToImage': 'images/addMessageToImage'
      'fetchProjects': 'projects/fetchProjects'
    })      
  },

}
</script>

<style  scoped>

ul {
  width: 312px;
}

li {
  padding: 1px 10px;
  margin: 2px;
  background-color: #EEEEEE;
  border: 5px solid #eba742;
  font-family: "Lucida Console", Courier, monospace;
}

</style>