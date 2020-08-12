<template>
  <div>
    <ul id="example-1">
      <li 
        v-for="(item, i) in images" 
        :key="`item-${i}`"
      >
        <img :src='item.url' alt="">
        <br>
        <button @click="addMessageToImage(item.id)">
          Add Message
        </button>
      </li>
    </ul>
  </div>
</template>



<script>

import {mapState, mapActions} from 'vuex'

export default {
  name: 'ImageList',

  computed: {
    ...mapState('images', [
      'images'
    ]),
  },

  methods: {
    ...mapActions({
      'addMessageToImage': 'images/addMessageToImage'
    })      
  },

}
</script>