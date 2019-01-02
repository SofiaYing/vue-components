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
      margin-right: -1px;
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
      &:first-child{
        border-left: 0;
      }
      &:last-child{
        border-right: 0;
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
    }
  }
</style>


