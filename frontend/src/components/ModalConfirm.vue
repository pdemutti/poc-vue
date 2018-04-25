<template>
  <v-dialog v-model="modalConfirm" max-width="600">
    <v-card>
      <v-card-title class="headline">Titulo?</v-card-title>
      <v-card-text>Demonstração de componente de modal de confirmação.</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" flat="flat" @click="closeModal()">Cancelar</v-btn>
        <v-btn color="green darken-1" flat="flat" @click="acceptModal()">Aceitar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ModalConfirm',
  computed: {
    modalConfirm () {
      return this.$store.state.modal.confirm
    }
  },
  methods: {
    closeModal () {
      const vm = this

      vm.$store.commit('MODAL_CONFIRM', false)
      vm.$store.commit('SHOW_SNACKBAR', {message: 'cancelado!', time: 2000, color: 'error'})
    },
    acceptModal () {
      const vm = this

      vm.$store.commit('MODAL_CONFIRM', false)
      vm.$store.commit('SHOW_SNACKBAR', {message: 'aceito com sucesso!', time: 2000, color: 'success'})
    }
  },
  data: () => ({
    dialog: false
  })
}
</script>

<style lang="css" scoped>
</style>
