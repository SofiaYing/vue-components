<template>
  <div class="home">
     <g-button></g-button>
  </div>
</template>

<script>
import button from '@/components/button.vue'
export default {
  name: 'home',
  data () {
    return{

    }
  },
  components:{
    'g-button':button,
  },
}
</script>

<style lang="less">
  .home{
    padding: 30px;
  }
</style>

