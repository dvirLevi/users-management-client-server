<template>
  <!-- <div class="w-100 center-all"> -->
  <div class="butt p-2 c-p center-all-between m-1" @click="showMenu = !showMenu" :style="{border: '1px solid' + themeColor }">
    <p class="m-0">{{correntSelect}}</p>
    <i class="fas fa-chevron-down m-2"></i>
    <div class="menu w-100 center-all" v-if="showMenu">
      <p class="w-100 p-1 border-top border-bottem m-0 c-p" v-for="item in items" :key="item.ip" @click="select(item)">
        {{item.ip}}</p>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue
  // import * as KosherZmanim from "kosher-zmanim";
  export default {
    name: "selectLocation",
    components: {},
    props: {
      items: Array,
      defulteSelect: Number,
      themeColor: String
    },
    data() {
      return {
        showMenu: false,
        correntSelect: "select ip"
      };
    },
    mounted() {
      // this.select(this.items[0])
    },
    methods: {
      select(item) {
        this.correntSelect = item.ip
        this.$emit('mySelect', item)
      },
    },
    computed: {
    
    }
  };
</script>

<style scoped>
  .butt {
    /* background-color: #085f63; */
    border-radius: 5px;
    color: rgb(0, 0, 0);
    width: 100%;
    font-size: 20px;
    /* font-weight: 100; */
    position: relative;
    /* margin-top: 2px; */
  }
  .menu {
    position: absolute;
    background-color: #fff;
    color: #000;
    z-index: 4;
    top: 100%;
    right: 0;
        box-shadow: 2px 7px 11px #00000054;
  }
  @media (max-width: 767.98px) {}
</style>