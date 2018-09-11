<template>
  <div class="home">
    <transition name="fade" @touchmove.stop.prevent>
      <div calss="menu-mask" v-show="isRellyShow" @click="hideSide">
      </div>
    </transition>

  </div>
</template>

<script>
export default {

}
</script>