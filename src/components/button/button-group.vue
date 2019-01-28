<template>
  <div class="c-button-group">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'CButtonGroup',
  data () {
    return {

    }
  },

  mounted(){
    // this.$children  vue实例
    console.log(this.$el.children)
    for(let node of this.$el.children){
      if(node.nodeName.toLowerCase() !== 'button'){
        console.log('c-button-group的子元素需为c-button')
      }
    }
    
  },
}
</script>

<style lang="less">
  .c-button-group{
    display: inline-flex;
    vertical-align: middle;
    .c-button{
      border-radius: 0;
      margin-right: 0 !important;
      &:not(:first-child){
        margin-left: -1px !important;      //border重叠，如果使用去掉border的方式设置按钮交叠处的border,会出现在划过等操作改变颜色时border缺失的bug
      }
      &:first-child{
        border-top-left-radius: @--button-border-radius;
        border-bottom-left-radius: @--button-border-radius;
      }
      &:last-child{
        border-top-right-radius: @--button-border-radius;
        border-bottom-right-radius: @--button-border-radius;
      }
      &:hover{
        z-index: 1;
      }
    }
  }
</style>


