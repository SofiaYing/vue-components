<template>
<svg v-if="name" class="c-icon" :class="{loading:name === 'loading'}">
  <use :xlink:href="`#icon-${name}`"></use>
</svg>
<!-- <svg class="icon"><use xlink:href="#icon-search"></use></svg> -->
</template>

<script>
import '@/svg.js'
export default {
  props:['name'],
}
</script>

<style lang="less">
.c-icon{
  height: 1em;
  width: 1em;
  &.loading{
    animation: loading 1.5s linear infinite;
  }
}

@keyframes loading{
  from {transform: rotate(0)}
  to {transform: rotate(360deg)}
}

</style>



