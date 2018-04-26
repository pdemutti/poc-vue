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
          <CcVrRefeicao :card="cardRefeicao" />
        </v-tab-item>

        <v-tab-item key="tab3" id="VR Auto">
          <CcVrAuto :card="cardAuto" />
        </v-tab-item>
      </v-tabs>

    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'
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
    },
    cardRefeicao () {
      return this.$store.state.painel.voce.meusCartoes.refeicao
    },
    cardAuto () {
      return this.$store.state.painel.voce.meusCartoes.auto
    }
  },
  methods: {
    getCards () {
      const vm = this

      vm.$data.loading = true
      const getCardAlimentacao = () => {
        api.get('/myCards/alimentacao')
          .then((result) => {
            vm.$store.commit('PAINEL_VOCE_MEUS_CARTOES', result.data)
          })
          .catch((error) => {
            vm.$data.loading = false
            console.log(error)
          })
      }

      const getCardRefeicao = () => {
        api.get('/myCards/refeicao')
          .then((result) => {
            vm.$store.commit('PAINEL_VOCE_MEUS_CARTOES', result.data)
          })
          .catch((error) => {
            vm.$data.loading = false
            console.log(error)
          })
      }

      const getCardAuto = () => {
        api.get('/myCards/auto')
          .then((result) => {
            vm.$store.commit('PAINEL_VOCE_MEUS_CARTOES', result.data)
          })
          .catch((error) => {
            vm.$data.loading = false
            console.log(error)
          })
      }

      axios.all([getCardAlimentacao(), getCardRefeicao(), getCardAuto()]).then(axios.spread(function (acct, perms) {
        setTimeout(() => {
          vm.$data.loading = false
        }, 1500)
      }))
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
