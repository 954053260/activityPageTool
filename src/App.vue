<template>
  <div id="app">
      <start-up/>
  </div>
</template>
<script>

import startUp from './views/startUp/index.vue';

export default {
  name:'app',
  data() {
    return {
      
    }
  },
  components: {
    startUp
  }
}
</script>

<style>
#app {
  display: flex;
}
</style>


