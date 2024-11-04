<template>
  <q-card class="my-card bg-secondary text-white">
    <q-card-section>
      <div class="text-h6">
        {{ props.title }}
      </div>
    </q-card-section>
    <q-card-section>
      {{ lorem }}
    </q-card-section>
    <q-separator dark />
    <q-card-actions align="between">
      <q-btn flat @click="adjust" icon="checklist_rtl" />
      <q-btn flat @click="select" icon="add_shopping_cart" />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const $q = useQuasar()

// eslint-disable-next-line vue/require-prop-types
const props = defineProps(['card'])

function alert (tit, msg) {
  $q.dialog({
    title: tit,
    message: msg
  })
}

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
const adjust = () => alert(t('selectDialog.title'), t('selectDialog.message'))
const select = () => alert(t('addDialog.title'), t('addDialog.message'))

</script>
