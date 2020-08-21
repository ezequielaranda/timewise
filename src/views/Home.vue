<template>
  <div>
    <div 
      :class="'container'"
    >
      <p><strong>TimeWise</strong> for Chrome</p>

      <div 
        class="panel"
      >
        <p>Activate feedback feature on <strong>project-name</strong>:</p>

        <label 
          :class="'switch'"
        >
          <input
            v-model="isFeedbackActive"
            :type="'checkbox'"
          >
          <span 
            :class="'slider round'"
          />
        </label>
      </div>

      <button
        :class="'btn-primary'"
      >
        Go Premium
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isFeedbackActive: false,
    }
  },
  watch: {
    isFeedbackActive: {
      handler: 'onToggle',
    },
  },
  created(){
    this.setIcon()
  },
  methods: {
    setIconBadge(payload){
      const { color, text } = payload

      chrome.browserAction.setBadgeBackgroundColor({ color })
      chrome.browserAction.setBadgeText({ text })
    },
    onToggle(){
      let payload
      if (!this.isFeedbackActive){
        payload = { color: '#2b3a4b', text: 'Off' }
      }
      else {
        payload = { color: '#FF0000', text: '10+' }
      }
      this.setIconBadge(payload)


      //Send a message to a tab which has your content script injected. 
      chrome.tabs.query({currentWindow: true, active: true}, (tabs) => {
        const currentTabId = tabs[0].id

        chrome.tabs.sendMessage(currentTabId, {action: 'GET_DIMENSION'})
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
}

.panel {
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #2b3a4b;
  margin: 0px 0 20px 0;
}

.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #f08640;
}

input:focus + .slider {
  box-shadow: 0 0 1px #f08640;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.btn-primary {
  font-size: 14px;
  height:30px;
  background-color: #f08640;
  border: 1px solid #f08640;
  color: whitesmoke;
}
</style>