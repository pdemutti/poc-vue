<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs8>
          <CcVoce />
        </v-flex>

        <v-flex xs4>
          <CcGuiaVR />
        </v-flex>
      </v-layout>

      <v-layout wrap>
        <v-flex xs5 pr-3>
          <CcExtrato />
        </v-flex>

        <v-flex xs4>
          <CcEstatisticas />
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>
import CcVoce from '@/components/painel/voce/Index'
import CcGuiaVR from '@/components/painel/guia_vr/Index'
import CcExtrato from '@/components/painel/extrato/Index'
import CcEstatisticas from '@/components/painel/estatisticas/Index'

export default {
  name: 'Painel',
  components: {
    CcVoce,
    CcGuiaVR,
    CcExtrato,
    CcEstatisticas
  },
  data () {
    return {

    }
  }
}
</script>
