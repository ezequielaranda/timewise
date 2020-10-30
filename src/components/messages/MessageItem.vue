<template>
  <div>
    <img 
      src="@/assets/img_avatar.png" 
      alt="Avatar" 
      class="avatar"
    >
    <b
      style="text-align:right;"
    >
      <strong>
        {{ user.name }}
      </strong>
    </b>
    <small>
      <p>
        {{ message.messageText }}
      </p>
    </small>
    <ViewButton 
      style="align-self:right;"
      @view="viewMessage"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ViewButton from '@/components/ui/ViewButton.vue'
export default {
  name: 'MessageItem',
  components: {
    ViewButton
  },
  
  props: {
    message: {
      type: Object,
      default: null
    },
  },

  
  data() {
    return {
      user: {}
    }
  },

  computed: {
    ...mapGetters({
      'getUserById': 'users/getUserById',
    }),
  },


  mounted() {
    this.user = this.getUserById(this.message.userId)
  },

  methods: {

    viewMessage() {

    }

  }
}
</script>


<style>
.avatar {
  vertical-align: middle;
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
</style>