<template>
  <div>
    <p 
      class="title"
    >
      Your last comments...
    </p>
    <MessageList :messagelist="messageList" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MessageList from '@/components/messages/MessageList.vue'
export default {
  name: 'LastMessages',
  components: {
    MessageList
  },

  data() {
    return {
      loading: true,
      messageList: []
    }
  },

  computed: {
    ...mapGetters({
      'getLastMessagesByProjectId': 'messages/getLastMessagesByProjectId',
      'getCurrentProject': 'projects/getCurrentProject',
    }),
  },

  mounted() {
    this.messageList = this.getLastMessagesByProjectId(this.getCurrentProject.projectId)
  },

  methods: {
   
  },
}
</script>

<style>
  .title {
    margin-top: 30px;
    margin-left: 20px;
  }
</style>