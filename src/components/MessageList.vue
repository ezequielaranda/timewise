<template>
  <div>
    <ul id="example-1">
      <li 
        v-for="(item, i) in messages" 
        :key="`item-${i}`"
      >
        {{ item }}
        <button @click="removeMessage(item.id)">
          Remove
        </button>
      </li>
    </ul>
  </div>
</template>



<script>

import {mapState, mapActions} from 'vuex'

export default {
  name: 'MessageList',

  computed: {
    ...mapState('messages', [
      'messages'
    ]),
  },

  methods: {
    ...mapActions( 'messages', [
      'removeMessage'
    ])      
  },

}
</script>