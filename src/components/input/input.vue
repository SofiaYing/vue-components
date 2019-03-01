<template>
  <!-- <div class="input_wrapper" :class="{'error':error}"> -->
  <div class="input_wrapper" :class="{error}">
    <input class="c-input" :value=value :disabled="disabled" type="text">
  </div>
</template>

<script>
export default {
  name:"CCInput",    //使用vue开发者工具时，组件会优先显示该名字
  props:{
    value:{
      type: String
    },
    disabled:{
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="less" scoped>


.input_wrapper{
  font-size: 12px;
  display: inline-block;
  .c-input{
    color: #666;
    outline: none;
    height: 32px;
    padding: 0 8px;
    border: 1px solid @--default-border-color;
    border-radius: @--default-border-radius;
    &:hover{
      border-color: #666;
    }
    &:focus{
      box-shadow: inset 0 1px 3px #999;
    }
    &:disabled{
      border-color: #ccc;
      cursor: not-allowed;
    }
  }
}
</style>

