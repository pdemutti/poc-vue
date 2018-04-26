<template>
  <v-layout class="mt-3">
    <transition name="fade" v-show="loading" appear mode="out-in">
      <div class="loading-blocks" v-show="loading">
        <v-progress-circular indeterminate :size="70" :width="7" color="white" class="loading-progress"></v-progress-circular>
      </div>
    </transition>
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
          <CcVrAlimentacao :card="cardAlimentacao" />
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
import api from '@/services/api'
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
  computed: {
    cardAlimentacao () {
      return this.$store.state.painel.voce.meusCartoes.alimentacao
    }
  },
  methods: {
    getCards () {
      const vm = this

      vm.$data.loading = true
      api.get('/myCards/alimentacao')
        .then((result) => {
          setTimeout(() => {
            vm.$store.commit('PAINEL_VOCE_MEUS_CARTOES', result.data)
            vm.$data.loading = false
          }, 1500)
        })
        .catch((error) => {
          vm.$data.loading = false
          console.log(error)
        })
    }
  },
  mounted () {
    this.getCards()
  },
  data: () => ({
    active: null,
    menu: ['VR Alimentação', 'VR Refeição', 'VR Auto'],
    loading: false
  })
}
</script>

<style lang="scss" scoped>
  .icon-card {
    margin-right: 5px;
  }
  .loading-blocks {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 5;
    background: none rgba(0,0,0,0.5);

    .loading-progress {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
    }
  }
</style>
