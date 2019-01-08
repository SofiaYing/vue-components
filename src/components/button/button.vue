<template>
<button 
  class="c-button" 
  :class="{
    [`icon-${iconPosition}`]: true, 
    'is-primary': primary,
    'is-circle': circle,
    'is-round': round,
    'is-ghost': ghost,
    'is-disabled': disabled,
  }"
  :disabled="disabled || loading"
  @click="clickHandler">

  <c-icon class="icon" v-if="icon && !loading" :name="icon"></c-icon>
  <!-- <c-icon class="icon" v-else-if="icon && loading" name="load"></c-icon> -->
  <c-icon class="icon" v-if="loading" name="loading"></c-icon>

  <div class="content">
    <!-- slot 不能添加class -->
    <slot></slot>
  </div>
</button>
</template>

<script>
import CIcon from '@/components/icon'

export default {
  name: 'CButton',
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
        return value === 'left' || value === 'right'
      },
    },
    loading: Boolean,
    circle: Boolean,
    round: Boolean,
    ghost: Boolean,
    disabled: Boolean,
    primary: Boolean,
  },
  components:{
    'c-icon': CIcon,
  },
  methods:{
    clickHandler(){
      this.$emit('click')
    },
  }
}
</script>

<style lang="less">

.c-button{
  font-size: @--button-font-size;
  padding: 0 1em;
  height: @--button-height;
  border-radius: @--button-border-radius;
  color: #666;
  background-color: #fff;
  border: 1px solid #999;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;   //两个按钮（内联元素）上下不对齐，添加vertical-align:middle 或 vertical-align:top
  &:hover{
    color: @--default-color;
    border-color: @--default-color;
    .c-icon{
      fill: @--default-color;
    }
  }
  &:focus{
    outline: none;
  }
  .c-icon{
    fill: #666;
  }
  .icon{
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

  &.is-circle{
    border-radius: 50%;
    width: 32px;
    padding: 0;
    justify-content: center;
    .icon{
      margin-right: 0;
    }
  }
  &.is-round{
    border-radius: 20px;
  }
  &.is-ghost{
    background-color: transparent;
    border: solid 1px #fff;
    color: #fff;
    .c-icon{
      fill: #fff;
    }
  }
  &.is-disabled{
    cursor: not-allowed;
    color: #999;
    border-color: #999;
    .c-icon{
      fill: #999;
    }
  }

  &.is-primary{
    background-color: @--default-color;
    border: 0;
    color: #fff;
    .c-icon{
      fill: #fff;
    }
    &:hover{
      opacity: 0.9;
    }
    &.is-disabled{
      background-color: #9ddcbe;
    }
  }
}
</style>


