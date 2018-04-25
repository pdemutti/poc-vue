<template>
  <v-toolbar class="toolbar">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>
      <img src="/static/img/logo.png" alt="logo">
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat to="/">Você</v-btn>
      <v-btn flat to="/estabelecimentos">Estabelecimentos</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .toolbar {
    background: #2e2f39;
    color: #fff;

    .icon, button, a {
      color: white;
    }
  }
</style>
