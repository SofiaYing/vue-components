<template>
<button class="c_button">
  <slot></slot>
</button>
  
</template>

<script>
export default {
  
}
</script>

<style lang="less">
@--button-font-size: 14px;
@--button-background-color: #42b983;
@--button-border-radius: 4px;
@--button-height: 32px;
.c_button{
  font-size: @--button-font-size;
  padding: 0 1em;
  height: @--button-height;
  background-color: @--button-background-color;
  border-radius: @--button-border-radius;
  color: #fff;
  &:hover{
    opacity: 0.9;
  }
}
</style>


