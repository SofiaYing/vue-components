<template>
<button class="g_button">
  <span>
    默认按钮
  </span>
</button>
  
</template>

<script>
export default {
  
}
</script>

<style lang="less">
@--button-font-size:14px;
@--button-background-color:#42b983;
.g_button{
  font-size: @--button-font-size;
  padding: 0.8em 1em;
  background-color: @--button-background-color;
  border-radius: 4px;
  span{
    color: #fff;
    line-height: 1em;
  }
  &:hover{
    opacity: 0.9;
  }
}
</style>


