<template>
  <div
    v-if="!loading"
  >
    <ul
      id="example-1"
    >
      <li
        v-for="(item, i) in messagelist" 
        :key="`item-${i}`"
      >
        <MessageItem :message="item" />
      </li>
    </ul>
  </div>
  <div
    v-else
  >
    Loading Messages...
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import MessageItem from './MessageItem'

export default {
  name: 'MessageList',
  components: {
    MessageItem
  },

  props: {
    messagelist: {
      type: Array,
      default: null
    },
  },

  data() {
    return {
      loading: false,
    }
  },

}
</script>

<style>
  ul {
    width: 312px;
  }

  li {
    padding: 1px 10px;
    margin: 2px;
    background-color: #EEEEEE;
    border: 5px solid #eba742;
    font-family: "Lucida Console", Courier, monospace;
  }
</style>