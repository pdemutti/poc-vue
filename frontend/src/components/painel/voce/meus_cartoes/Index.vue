<template>
  <v-layout class="mt-3">
    <v-flex>
      <v-tabs
        hide-slider
        show-arrows
        v-model="active"
      >
        <v-tab
          v-for="item in menu"
          :key="item"
          :href="'#' + item"
          ripple>
        <v-icon class="icon-card">credit_card</v-icon> {{ item }}
        </v-tab>

        <v-tab-item key="tab1" id="VR Alimentação">
          <CcVrAlimentacao />
        </v-tab-item>

        <v-tab-item key="tab2" id="VR Refeição">
          <CcVrRefeicao />
        </v-tab-item>

        <v-tab-item key="tab3" id="VR Auto">
          <CcVrAuto />
        </v-tab-item>
      </v-tabs>

    </v-flex>
  </v-layout>
</template>

<script>
import CcVrAlimentacao from '@/components/painel/voce/meus_cartoes/VrAlimentacao'
import CcVrRefeicao from '@/components/painel/voce/meus_cartoes/VrRefeicao'
import CcVrAuto from '@/components/painel/voce/meus_cartoes/VrAuto'

export default {
  name: 'Meus-Cartoes',
  components: {
    CcVrAlimentacao,
    CcVrRefeicao,
    CcVrAuto
  },
  data: () => ({
    active: null,
    menu: ['VR Alimentação', 'VR Refeição', 'VR Auto']
  })
}
</script>

<style lang="scss" scoped>
  .icon-card {
    margin-right: 5px;
  }
</style>
