<template>
  <div>
    <br>
    <ul id="example-1">
      <li
        v-for="(item, i) in allProjects" 
        :key="`item-${i}`"
      >
        <ProjectItem :project="item" />
        <br>
      </li>
    </ul>
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

  computed: {
    ...mapState('projects', [
      'allProjects'
    ]),
  },

  methods: {
    ...mapActions({
      // 'addMessageToImage': 'images/addMessageToImage'
    })      
  },

}
</script>

<style>

ul {
  width: 312px;
  list-style-position: outside;
}

li {
  padding: 1px 10px;
  margin: 2px;
  background-color: #EEEEEE;
  border: 5px solid #eba742;
  font-family: "Lucida Console", Courier, monospace;
}

</style>