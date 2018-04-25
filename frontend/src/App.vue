<template>
  <v-app white id="app">
    <CcHeader />
    <transition name="fade" appear mode="out-in">
      <router-view/>
    </transition>
    <CcFooter />
  </v-app>
</template>

<script>
import CcHeader from '@/components/Header'
import CcFooter from '@/components/Footer'

export default {
  name: 'Beneficiario',
  components: {
    CcHeader,
    CcFooter
  }
}
</script>

<style lang="scss">
  $color-brown: #94873d;

  .card {
    background: #fff;
  }
  .text-uppercase {
    text-transform: uppercase;
  }
  .color-brown {
    color: $color-brown;
  }
  .background-brown {
    background: $color-brown;
  }
  .fade-enter-active, .fade-leave-active {
    -webkit-transition: opacity 1s ease, transform 1s;
    -moz-transition: opacity 1s ease, transform 1s;
    -ms-transition: opacity 1s ease, transform 1s;
    -o-transition: opacity 1s ease, transform 1s;
    transition: opacity 1s ease, transform 1s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
    -webkit-transform: translate3d(10px, 0, 0);
    -moz-transform: translate3d(10px, 0, 0);
    -ms-transform: translate3d(10px, 0, 0);
    -o-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
  .bounce-enter-active {
    -webkit-animation: bounce-in .5s;
    -moz-animation: bounce-in .5s;
    -ms-animation: bounce-in .5s;
    -o-animation: bounce-in .5s;
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    -webkit-animation: bounce-out .5s;
    -moz-animation: bounce-out .5s;
    -ms-animation: bounce-out .5s;
    -o-animation: bounce-out .5s;
    animation: bounce-out .5s;
  }
  @keyframes bounce-in{
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes bounce-in{
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes bounce-out{
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(0);
    }
  }
</style>
