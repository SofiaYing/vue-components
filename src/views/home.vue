<template>
  <div class="home">
    <c-button>按钮</c-button>
    <c-button icon="search" primary>按钮</c-button>
    <c-button icon="search" icon-position="right">按钮</c-button>
    <!-- <c-button icon="search" icon-position="start"">按钮</c-button> -->

    <!-- <c-button icon="search" icon-position="left" :loading="loadingShowFlag" @click="loadingShow">按钮</c-button> -->
    <c-button :loading="loadingShowFlag" @click="loadingShow">按钮</c-button>

    <c-button icon="search" circle></c-button>
    <c-button icon="search" round>圆角按钮</c-button>
    <div class="ghost_wrapper">
      <c-button icon="search" ghost>幽灵按钮</c-button>
    </div>
    
    <c-button icon="search" disabled @click="disabledClick">禁用按钮</c-button>

    <c-button-group>
      <c-button>左按钮</c-button>
      <c-button>右按钮</c-button>
    </c-button-group>

    <c-button-group>
      <c-button round icon="search">左按钮</c-button>
      <c-button>右按钮</c-button>
    </c-button-group>
  </div>
</template>

<script>
import button from '@/components/button/button'
import buttonGroup from '@/components/button/button-group'

export default {
  name: 'home',
  data () {
    return{
      loadingShowFlag: false,
    }
  },
  components:{
    'c-button': button,
    'c-button-group': buttonGroup,
  },
  methods: {
    loadingShow(){
      this.loadingShowFlag = true

      setTimeout(()=>{
        this.loadingShowFlag = false
      },2000)
    },
    disabledClick(){
      console.log('未禁用')
    },
  }
}
</script>

<style lang="less">
  .home{
    padding: 30px;
    // background-color: #2c3e50;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    .ghost_wrapper{
      background: #2c3e50;
      width: 150px;
      height: 50px;
    }
  }
</style>

