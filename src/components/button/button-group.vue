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
  }
}
</script>

<style lang="less">
  .c-button-group{
    display: inline-flex;
    > .c-button{
      margin-right: -1px;      //border重叠，如果使用去掉border的方式设置按钮交叠处的border,会出现在划过等操作改变颜色时border缺失的bug
      &:last-child{
        margin-right: 0;
      }
      &:not(:last-child){
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      &:not(:first-child){
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
      &:hover{
        z-index: 1;
      }
    }
  }
</style>


