<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h1>PAINEL VOCÊ</h1>

        <v-tabs
          v-model="active"
          slider-color="green"
        >
          <v-tab
            v-for="item in menu"
            :key="item"
            ripple
          >
            {{ item }}
          </v-tab>
          <v-tab-item
            v-for="item in 3"
            :key="item"
          >
            <v-card flat class="content-you">
              <v-card-text>{{ text }}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Voce',

  data: () => ({
    active: null,
    menu: ['MEUS CARTÕES', 'CONSULTA RÁPIDA', 'DESBLOQUEAR CARTÃO'],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  })
}
</script>

<style lang="scss" scoped>
  .content-you {
    margin-top: 2%;
  }
</style>
