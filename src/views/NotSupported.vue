<template>
  <div>
    <div 
      :class="'container'"
    >
      <p><strong>TimeWise</strong> for Chrome</p>

      <div 
        class="panel"
      >
        <p>Domain not supported.</p>
      </div>

      <button
        :class="'btn-primary'"
      >
        Contact us
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotSupported'
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
  justify-content: left;
  align-items: center;
  border-top: 1px solid #2b3a4b;
  margin: 0px 0 20px 0;
}

.btn-primary {
  font-size: 14px;
  height:30px;
  background-color: #f08640;
  border: 1px solid #f08640;
  color: whitesmoke;
}
</style>