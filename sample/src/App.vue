<template>
    <demo-component>
    </demo-component>
</template>

<script>
  import Demo from './components/Demo.vue'

export default {
  name: 'App',
    components: {
        'demo-component': Demo
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
