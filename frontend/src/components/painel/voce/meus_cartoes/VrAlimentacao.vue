<template>
  <v-container style="background: white;">
    <v-container fill-height>
      <v-layout row wrap>
        <v-flex xs6 justify-space-between>
          <img class="card-vr-refeicao" src="/static/img/painel/meus_cartoes/card_alimentacao.png" alt="">
        </v-flex>

        <v-flex class="pl-3 pt-4" xs6 justify-space-between>
          <v-layout row wrap>
            <v-flex xs12>
              <h1>R$ 350,00</h1>
              <p>Saldo disponível</p>
            </v-flex>

            <v-flex xs12 justify-space-between>
              <h1>A Confirmar</h1>
              <p>Próximo benefício</p>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12>
          <div class="bar-percents">
            <p>2250%</p>
            <div class="percent"></div>
            <div class="percent-2"></div>
          </div>
        </v-flex>

        <v-flex xs12>
          <v-divider class="my-3"></v-divider>
        </v-flex>

        <v-flex xs12>
          <div class="mb-4 text-right">
            <p>Ultimo benefício <b>R$ 1.000,00</b></p>
          </div>

          <v-layout>
            <v-flex xs6 class="pr-2">
              <v-btn large block depressed @click="blockCard()" color="default" class="mx-0">Bloquear cartão</v-btn>
            </v-flex>

            <v-flex xs6 class="pl-2">
              <v-btn large block depressed @click="blockCard()" color="default" class="mx-0">Alterar senha</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>

      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'VR-Alimentacao',
  methods: {
    blockCard () {
      this.$store.commit('MODAL_CONFIRM', true)
    }
  },
  data: () => ({

  })
}
</script>

<style lang="scss" scoped>
  .card-vr-refeicao {
    width: 100%;
  }
  .text-right {
    text-align: right;
  }
  .bar-percents {
    position: relative;
    width: 100%;
    height: 35px;

    p {
      position: absolute;
      z-index: 3;
      color: white;
      text-align: center;
      width: 100%;
      padding: 5px;
      font-size: 1.3vw;
    }

    .percent {
      width: 80%;
      height: 35px;
      background: #00ce54;
      position: absolute;
      z-index: 2;
    }
    .percent-2 {
      width: 100%;
      height: 35px;
      background: #008544;
      position: absolute;
      top: 0;
    }
  }
</style>
