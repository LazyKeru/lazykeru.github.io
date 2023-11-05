<template>
  <Header></Header>
  <Navbar></Navbar>
  <router-view></router-view>
</template>

<script lang="ts">
import Header from '@/components/Header.vue';
import Navbar from './pages/Navbar.vue';
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    Header,
    Navbar
  },
})
export default class App extends Vue {}
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
