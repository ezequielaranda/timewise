<template>
  <div class="home">
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

export default {
  name: 'Home',
  components: {
    MessageList
  },

  data() {
    return {
      inputText: ''
    }
  },

  methods: {
    
    click() {
      this.addMessage(this.inputText)
    },

    ...mapActions('messages', [
      'addMessage'
    ])
    
  },
}
</script>
