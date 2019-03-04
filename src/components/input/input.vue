<template>
  <!-- <div class="input_wrapper" :class="{'error':error}"> -->
  <div class="c-input">
    <input :value=value :disabled="disabled" :class="{error}" type="text">
    <!-- <icon v-if="error" name="search"></icon>
    <span v-if="error">{{error}}</span> -->

    <!-- template 只v-if生效，不添加如<div></div>这样的标签，徒增CSS -->
    <template v-if="error">
      <c-icon class="icon-error" name="error"></c-icon>
      <span>{{error}}</span>
    </template>
  </div>
</template>

<script>
import CIcon from '@/components/icon'
export default {
  name:"CCInput",    //使用vue开发者工具时，组件会优先显示该名字
  components:{"c-icon":CIcon},
  props:{
    value:{
      type: String
    },
    disabled:{
      type: Boolean,
      default: false,
    },
    error:{
      type: String,
    }
  }
}
</script>

<style lang="less" scoped>


.c-input{
  font-size: @--default-font-size;
  display: inline-flex;
  align-items: center;
  color: #666;
  > :not(:last-child){
    margin-right: 0.5em; 
  }
  
  input{
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
      color: #ccc;
    }
    &.error{
      border-color: red;
      &:focus{
        box-shadow: inset 0 1px 3px red;
      }
    }
  }
  .icon-error{
    fill: red;
  }
}
</style>

