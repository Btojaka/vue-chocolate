<template>
  <div id="app">
    <img alt="Onzas de chocolate" src="./assets/onzas.jpeg">
    <Tableta msg="¡MMMMM CHOCOLATE!"/>
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
