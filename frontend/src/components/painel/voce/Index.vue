<template>
  <v-layout class="mt-4 mb-4">
    <v-flex>
      <h1>PAINEL VOCÊ</h1>

      <v-tabs
        v-model="active"
        slider-color="green" color="transparent">
        <v-tab
          v-for="item in menu"
          :key="item"
          :href="'#' + item"
          ripple
        >
          {{ item }}
        </v-tab>

        <v-tab-item key="tab1" id="MEUS CARTOES">
          <CcMeusCartoes />
        </v-tab-item>

        <v-tab-item key="tab2" id="CONSULTA RAPIDA">
          CONSULTA RÁPIDA
        </v-tab-item>

        <v-tab-item key="tab3" id="DESBLOQUEAR CARTAO">
          DESBLOQUEAR CARTAO
        </v-tab-item>
      </v-tabs>

    </v-flex>
  </v-layout>
</template>

<script>
import CcMeusCartoes from '@/components/painel/voce/meus_cartoes/Index'

export default {
  name: 'Voce',
  components: {
    CcMeusCartoes
  },
  data: () => ({
    active: null,
    menu: ['MEUS CARTOES', 'CONSULTA RAPIDA', 'DESBLOQUEAR CARTAO']
  })
}
</script>

<style lang="scss" scoped>
  .content-you {
    margin-top: 2%;
  }
</style>
