export default {
  'MODAL_CONFIRM' (state, payload) {
    state.modal.confirm = payload
  },
  'SHOW_SNACKBAR' (state, payload) {
    state.snackBar.active = true
    state.snackBar.message = payload.message
    state.snackBar.color = payload.color
    state.snackBar.mode = payload.mode
    setTimeout(() => {
      state.snackBar.active = false
    }, payload.time)
  },
  'PAINEL_VOCE_MEUS_CARTOES' (state, payload) {
    state.painel.voce.meusCartoes[payload.type] = payload
  },
  'PAINEL_EXTRATOS_FINAIS' (state, payload) {
    state.painel.extratosFinais.items = payload
  }
}
