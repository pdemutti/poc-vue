<template>
  <v-card>
    <v-card-title primary-title>
      <h3 class="text-uppercase color-brown">Estatisticas - Final 3800</h3>
    </v-card-title>

    <v-layout row wrap class="pl-3 pr-3">
      <v-flex xs12>
        <v-select
          prepend-icon="event"
          label="Filtrar por?"
          v-model="diaSelecionado"
          :items="dias"
        ></v-select>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="pl-3 pr-3">
      <v-flex xs12>
        <v-radio-group v-model="radioGroup">
          <v-radio
            v-for="item in filtroDias"
            :key="item"
            :label="`${item}`"
            :value="item"
          ></v-radio>
        </v-radio-group>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="pl-1 pr-1">
      <v-flex xs12 sm12>
        <div>
          <h3 class="headline mb-0">
            <v-layout row wrap>
              <v-flex xs12 class="pl-1 pr-1 box">
                <canvas class="canvas" ref="canvas" width="1100" height="1000"></canvas>
              </v-flex>
            </v-layout>
          </h3>
        </div>
      </v-flex>
    </v-layout>

  </v-card>
</template>

<script>
import { Doughnut } from 'vue-chartjs'

export default {
  name: 'Estatisticas',
  extends: Doughnut,
  mounted () {
    this.renderChart(this.data, this.chartOptions)
  },
  data () {
    return {
      filtroDias: ['Mais visitados', 'Por valores'],
      radioGroup: 1,
      diaSelecionado: '',
      dias: ['30 dias', '3 meses', '1 ano'],
      data: {
        labels: ['Supermercado A', 'Supermercado B', 'Supermercado C', 'Outros'],
        datasets: [
          {
            label: 'TeamA Score',
            data: [10, 50, 25, 70],
            backgroundColor: [
              '#00ce54',
              '#4e587a',
              '#8697a7',
              '#008544'
            ],
            borderColor: [
              '#ccc',
              '#ccc',
              '#ccc',
              '#ccc'
            ],
            borderWidth: [1, 1, 1, 1, 1]
          }
        ]
      },
      chartOptions: {
        fullWidth: true,
        responsive: true,
        title: {
          display: true,
          position: 'top',
          text: '',
          fontSize: 18,
          fontColor: '#111'
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            fontColor: '#333'
            // fontSize: 16
          }
        }
      }
    }
  },
  methods: {},
  events: {}
}

</script>

<style lang="css" scoped>
  .canvas {
    width: 100% !important;
    height: 100% !important;
    background: transparent;
  }
</style>
