<template>
  <q-card>
    <q-card-section class="q-pt-lg">
      <q-option-group
          v-model="selection"
          type="checkbox"
          :options="meals"
        >
        <template #label="meal">
          <div class="q-pa-sm">
            {{ meal.label }}
            <br />
            {{ meal.price }}
          </div>
        </template>
      </q-option-group>
    </q-card-section>
    <q-card-actions align="between">
      <q-btn flat :label="$t('selectProducts.nok')" color="primary" v-close-popup />
      <q-btn flat :label="$t('selectProducts.ok')" color="primary" @click="add" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useQuasar } from 'quasar'

  const { t } = useI18n()
  const $q = useQuasar()
  const selection = ref([])

  function confirm (msg) {
    $q.dialog({
      message: msg
    })
  }

  const meals = [
  { value: 1, label: computed(() => t('meals.meal1')), price: '$100' },
  { value: 2, label: computed(() => t('meals.meal2')), price: '$50' },
  { value: 3, label: computed(() => t('meals.meal3')), price: '$75' }
]

  const add = () => {
    confirm(t('addProductMessage'))
    console.log('handle with pinia')
    console.log('selection: ' + selection.value)
  }

</script>

