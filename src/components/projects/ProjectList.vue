<template>
  <div
    v-if="!loading"
  >
    <ul
      id="example-1"
    >
      <li
        v-for="(item, i) in projectlist" 
        :key="`item-${i}`"
      >
        <ProjectItem :project="item" />
      </li>
    </ul>
  </div>
  <div
    v-else
  >
    Loading Projects...
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

  props: {
    projectlist: {
      type: Array,
      default: null
    },
  },

  data() {
    return {
      loading: false
    }
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
  
}

</style>