<template>
  <div id="app">
    <CcHeader />
    <router-view/>
    <CcFooter />
  </div>
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
  .card {
    background: #fff;
  }
</style>
