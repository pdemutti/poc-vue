<template>
  <v-card class="extract">
    <v-card-title primary-title>
      <h3 class="text-uppercase color-brown">Extrato - Final 3800</h3>
      <v-list>
        <v-divider></v-divider>
        <template v-for="(item, index) in items">
          <v-list-tile avatar ripple :key="index" class="list-extracts">
            <v-list-tile-content>
              <v-list-tile-title class="color-brown text-uppercase">
                <span class="currency background-brown">$</span>
                {{ item.title }}
              </v-list-tile-title>
              <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-list-tile-action-text>R$ {{ item.action }}</v-list-tile-action-text>
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
export default {
  name: 'Voce',

  data: () => ({
    items: [
      {
        title: '31 de agosto',
        headline: 'Disponibilidade de crédito - GPA - EMPRESA HOMOL',
        action: -100
      },
      {
        title: '31 de agosto',
        headline: 'Disponibilidade de crédito - GPA - EMPRESA HOMOL',
        action: -100
      },
      {
        title: '31 de agosto',
        headline: 'Disponibilidade de crédito - GPA - EMPRESA HOMOL',
        action: -100
      },
      {
        title: '31 de agosto',
        headline: 'Disponibilidade de crédito - GPA - EMPRESA HOMOL',
        action: -100
      },
      {
        title: '31 de agosto',
        headline: 'Disponibilidade de crédito - GPA - EMPRESA HOMOL',
        action: -100
      },
      {
        title: '31 de agosto',
        headline: 'Disponibilidade de crédito - GPA - EMPRESA HOMOL',
        action: -100
      }
    ]
  })
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
