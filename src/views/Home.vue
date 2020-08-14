<template>
  <div>
    <div 
      :class="'panel'"
    >
      <p>TimeWise for Chrome</p>
      <hr>
      <p>Allow content revision on <strong>canva.com</strong>:</p>
      <button 
        @click="onToggle()"
      >
        Activate
      </button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'App',
  methods: {
    onToggle(){
      // Installed "Window State" Chrome App Id
      const appId = 'hcbhfbnaaancmblfhdknlnojpafjohbi'

      window.chrome.management.launchApp(appId, () => {
        if (chrome.runtime.lastError) { 
          console.error(chrome.runtime.lastError)
        }
        else {
          console.log('App launched')
        }
      })

    },
  },
}
</script>

<style lang="scss" scoped>
.panel {
  width: 350px;
}
</style>