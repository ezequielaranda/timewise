<template>
  <div class="home">
    <ImageList />
    <MessageList />
    <input
      v-model="inputText"
      type="text"
      placeholder="edit me..."
    >
    <button @click="click">
      Add Message
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
import MessageList from '@/components/MessageList.vue'
import ImageList from '@/components/ImageList.vue'

export default {
  name: 'Home',
  components: {
    MessageList,
    ImageList
  },

  data() {
    return {
      inputText: ''
    }
  },

  created() {
    this.setImages()
  },

  methods: {
    
    click() {
      this.addMessage(this.inputText)
    },

    ...mapActions({
      'addMessage': 'messages/addMessage',
      'setImages': 'images/setImages'

    })      
  },
}
</script>
