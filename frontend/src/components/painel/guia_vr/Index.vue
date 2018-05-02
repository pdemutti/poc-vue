<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h1>Guia VR</h1>
        <p>REDE CREDENCIADA</p>
        <v-card class="image">
          <img src="/static/img/painel/guia_vr.png" alt="guiaVR">
        </v-card>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Guia-VR',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .image {
    img {
      width: 100%;
    }
  }
</style>
