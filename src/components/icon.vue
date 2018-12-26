<template>
<svg v-if="name" class="c-icon">
  <use :xlink:href="`#icon-${name}`"></use>
</svg>
<!-- <svg class="icon"><use xlink:href="#icon-search"></use></svg> -->
</template>

<script>
export default {
  props:['name'],
}
</script>

<style lang="less">
.c-icon{
  height: 1em;
  width: 1em;
}
</style>



