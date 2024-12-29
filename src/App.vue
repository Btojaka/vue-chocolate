<template>
  <div id="app">
    <!-- Mensaje principal -->
    <Tableta msg="😋"/>    
  </div>
</template>

<script>
import Tableta from './components/Tableta';

export default {
  name: 'App',
  components: {
    Tableta
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0px;
  margin: 0px;
}
</style>
