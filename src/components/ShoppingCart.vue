<template>
    <div class="flex-1 p-4 overflow-y-auto">
      <q-card>
        <q-toolbar-title class="text-weight-bold text-center q-py-md">
          {{ $t('shoppingCart') }}
        </q-toolbar-title>
        <q-card-section v-for="item in cartItems" :key="item.id" class="q-pb-lg" style="min-width: 15rem;" >
          <div class="row justify-between items-center">
            {{ item.name }}
            <q-space />
            {{ item.price }}
          </div>
          <div class="row items-center">
            <q-btn icon="remove_circle_outline" round flat size="sm"/>
            <span>1</span>
            <q-btn icon="add_circle_outline" round flat size="sm" />
          </div>
        </q-card-section>
        <q-card-actions v-if="cartItems.length > 0" align="between" class="q-pb-md">
          <q-btn color="primary" :label="$t('leaveCart')" v-close-popup />
          <q-btn color="primary" :label="$t('moveToPay')" v-close-popup @click="handlePayment" />
        </q-card-actions>
      </q-card>
      <div v-if="cartItems.length === 0">
        $t('emptyCart')
      </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useQuasar } from 'quasar'

const { t } = useI18n()
const $q = useQuasar()

const cartItems = [
  { id: 1, name: t('plans.plan7'), price: '$60.000' }
]

const handlePayment = () => {
  alert(t('cartMsg'), t('cartPayment'))
}

function alert (tit, msg) {
  $q.dialog({
    title: tit,
    message: msg
  })
}


</script>

