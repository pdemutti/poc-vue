<template>
  <v-app white id="app">
    <CcHeader />
    <router-view/>
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
</style>
