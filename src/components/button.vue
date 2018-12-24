<template>
<button class="c-button" :class="{[`icon-${iconPosition}`]:true}">
  <svg v-if="icon" class="icon">
    <use :xlink:href="`#icon-${icon}`"></use>
  </svg>
  <!-- <svg class="icon"><use xlink:href="#icon-search"></use></svg> -->
  <div class="content">
    <!-- slot 不能添加class -->
    <slot></slot>
  </div>
</button>
</template>

<script>
export default {
  // props:['icon','iconPosition'],
  props: {
    icon: '',
    iconPosition: {
      type: String,
      default: 'left',     //防止用户不传iconPosition的时候，class=icon-undefined
      //属性检查器
      //用户传入的不是left或right，会报错
      validator: function(value){
        // 无论是true还是false都要返回，因为需要返回值
        // if(value!=='left' && value!=='right'){
        //   return false
        // }else{
        //   return true
        // }

        // 代码优化
        // return !(value !== 'left' &&  value !== 'right')

        // 继续优化
        return value === 'left' || vaule === 'right'
      },
    },
  },
}
</script>

<style lang="less">
@--button-font-size: 14px;
@--button-background-color: #42b983;
@--button-border-radius: 4px;
@--button-height: 32px;
.c-button{
  font-size: @--button-font-size;
  padding: 0 1em;
  height: @--button-height;
  background-color: @--button-background-color;
  border-radius: @--button-border-radius;
  color: #fff;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;   //两个按钮（内联元素）上下不对齐，添加vertical-align:middle 或 vertical-align:top
  &:hover{
    opacity: 0.9;
  }
  .icon{
    height: 1em;
    width: 1em;
    order: 1;
    margin-right: 0.3em;
  }
  .content{
    order: 2;
  }
  &.icon-right{
    .icon{
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
    .content{
      order: 1;
    }
  }
}
</style>


