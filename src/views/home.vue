<template>
  <div class="home">
    <c-button>按钮</c-button>
    <c-button icon="search">按钮</c-button>
    <c-button icon="search" icon-position="right">按钮</c-button>
    <!-- <c-button icon="search" icon-position="start"">按钮</c-button> -->
    <c-button icon="search" icon-position="left" :loading="loadingShowFlag" @click="loadingShow">按钮</c-button>
    <c-button icon="search" circle></c-button>
  </div>
</template>

<script>
import button from '@/components/button.vue'

export default {
  name: 'home',
  data () {
    return{
      loadingShowFlag: false,
    }
  },
  components:{
    'c-button':button,
  },
  methods: {
    loadingShow(){
      this.loadingShowFlag = true

      setTimeout(()=>{
        this.loadingShowFlag = false
      },2000)
    },
  }
}
</script>

<style lang="less">
  .home{
    padding: 30px;
  }
</style>

