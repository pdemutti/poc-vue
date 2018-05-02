<template>
  <v-card class="extract">
    <transition name="fade" v-show="loading" appear mode="out-in">
      <div class="loading-blocks" v-show="loading">
        <v-progress-circular indeterminate :size="70" :width="7" color="white" class="loading-progress"></v-progress-circular>
      </div>
    </transition>
    <v-card-title primary-title>
      <h3 class="text-uppercase color-brown">Extrato - Final 3800</h3>
      <v-list>
        <v-divider></v-divider>
        <template v-for="(item, index) in items">
          <v-list-tile avatar ripple :key="index" class="list-extracts">
            <v-list-tile-content>
              <v-list-tile-title class="color-brown text-uppercase">
                <span class="currency background-brown">$</span>
                {{ item.date }}
              </v-list-tile-title>
              <v-list-tile-sub-title class="text--primary">{{ item.text }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-list-tile-action-text>R$ {{ item.value }}</v-list-tile-action-text>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
        </template>
        <v-divider></v-divider>
      </v-list>
    </v-card-title>

    <v-card-actions>
      <v-btn flat block color="green">Ver extrato completo</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import api from '@/services/api'

export default {
  name: 'Voce',
  data: () => ({
    loading: false
  }),
  computed: {
    items () {
      return this.$store.state.painel.extratosFinais.items
    }
  },
  methods: {
    getExtracts () {
      const vm = this

      vm.$data.loading = true
      api.get('/extractsFinal')
        .then((result) => {
          vm.$store.commit('PAINEL_EXTRATOS_FINAIS', result.data)
          setTimeout(() => {
            vm.$data.loading = false
          }, 2000)
        })
        .catch((error) => {
          vm.$data.loading = false
          console.log(error)
        })
    }
  },
  mounted () {
    this.getExtracts()
  }
}
</script>

<style lang="scss" scoped>
  .divider {
    background: #ccc;
  }
  .extract {

    .list-extracts {
      padding: 2% 0;
    }

    .currency {
      border-radius: 50%;
      color: white;
      padding: 1px 5px;
    }
  }
</style>
