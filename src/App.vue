<template>
  <Header></Header>
  <Navbar></Navbar>
  <router-view></router-view>
</template>

<script>
import Header from './components/Header.vue'
import Navbar from './pages/Navbar.vue';

export default {
  name: 'App',
  components: {
    Header,
    Navbar
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
