<template>
  <div class="row">
    <div class="col">
      <router-view />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'userIps',
    components: {
      // HelloWorld
    },
    data() {
      return {
       
      }
    },
    computed: {

    }
  }
</script>

<style scoped>
  @media (max-width: 767.98px) {}
</style>