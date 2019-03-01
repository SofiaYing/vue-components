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
    <!-- 幽灵按钮：暂时去掉 -->
    <!-- <div class="ghost_wrapper">
      <c-button icon="search" ghost>幽灵按钮</c-button>
    </div> -->
    
    <c-button icon="search" disabled @click="disabledClick">禁用按钮</c-button>

    <c-button-group>
      <c-button>左按钮</c-button>
      <c-button>右按钮</c-button>
    </c-button-group>

    <c-button-group>
      <c-button round icon="search">左按钮</c-button>
      <c-button>右按钮</c-button>
    </c-button-group>

    <!-- 错误提示示例 -->
    <!-- <c-button-group>
      <div>
      <c-button>左按钮</c-button>
      </div>
      <c-button>右按钮</c-button>
    </c-button-group> -->

    <c-input value="ZH"></c-input>
    <c-input disabled></c-input>
  </div>
</template>

<script>
// import button from '@/components/button/button'
import buttonGroup from '@/components/button/button-group'
import input from '@/components/input/input'

export default {
  name: 'home',
  data () {
    return{
      loadingShowFlag: false,
    }
  },
  components:{
    // 'c-button': button,
    'c-button-group': buttonGroup,
    'c-input': input,
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
    background-color: #fff;
    .ghost_wrapper{
      background: #2c3e50;
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
    }
    .c-button{
      margin-right: 10px;
    }
    .c-button-group{
      margin-right: 10px;
    }
  }
</style>

