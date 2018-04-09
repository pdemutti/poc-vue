<template>
  <div id="app">
    <CcHeader />
    <router-view/>
  </div>
</template>

<script>
import CcHeader from '@/components/Header'

export default {
  name: 'Beneficiario',
  components: {
    CcHeader
  }
}
</script>
