<template>
  <q-card>
    <q-card-section class="q-pt-lg">
      {{ $t('addProductMessage') }}
    </q-card-section>
    <q-card-actions align="between">
      <q-btn flat :label="$t('selectProducts.nok')" color="primary" v-close-popup />
      <q-btn flat :label="$t('selectProducts.ok')" color="primary" v-close-popup @click="add" />
    </q-card-actions>
  </q-card>
</template>

<script setup>
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
  const alert = ref(false)

  const add = () => {
    console.log('handle with pinia')
  }

</script>
