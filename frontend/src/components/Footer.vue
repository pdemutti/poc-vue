<template>
  <v-footer height="auto" class="footer grey darken-3">
    <v-layout row wrap justify-center>
      <v-btn
        color="white"
        flat
        v-for="link in links"
        :key="link"
      >
        {{ link }}
      </v-btn>
      <v-flex xs12 py-3 text-xs-center white--text>
        &copy;2018 — <strong>VR - Portal Benefícios</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    links: ['Produtos', 'Empresas', 'Aprenda', 'Download']
  })
}
</script>

<style lang="scss" scoped>
  .footer {
    background: #2e2f39;
  }
</style>
