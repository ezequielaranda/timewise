<template>
  <div class="home">
    <MessageList />
  </div>
</template>

<script>
// @ is an alias to /src

import MessageList from '@/components/MessageList.vue'

export default {
  name: 'Home',
  components: {
    
    MessageList
  }
}
</script>
