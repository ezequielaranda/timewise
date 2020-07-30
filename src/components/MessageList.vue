<template>
  <div>
    <ul id="example-1">
      <li 
        v-for="(item, i) in messages" 
        :key="`item-${i}`"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>



<script>

import {mapState} from 'vuex'

export default {
  name: 'MessageList',

  computed: {
    ...mapState('messages', [
      'messages'
    ]),
  },

}
</script>