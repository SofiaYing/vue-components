<template>
  <div class="home">
    <c-button>按钮</c-button>
    <c-button icon="search">按钮</c-button>
    <c-button icon="search" icon-position="right">按钮</c-button>
    <!-- <c-button icon="search" icon-position="start"">按钮</c-button> -->
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
    'c-button':button,
  },
}
</script>

<style lang="less">
  .home{
    padding: 30px;
  }
</style>

