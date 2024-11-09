<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      reveal
      elevated
      class="bg-primary text-white"
    >
      <q-toolbar>
        <q-toolbar-title class="row">
          {{ $t('appTitle') }}
          <q-space />
          <div class="row items-center justify-end">
            <SettingsComponent />
            <q-btn unelevated class="q-px-xs q-mr-sm"
            icon="local_grocery_store" size="md"
            @click="handleShoppingCart"
            style="width: 10px;" />
          </div>
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs class="q-pa-sm">
        <q-route-tab
          to="/page1"
          :label="$t('pages.label1')"
        />
        <q-route-tab
          to="/page2"
          :label="$t('pages.label2')"
        />
        <q-route-tab
          to="/page3"
          :label="$t('pages.label3')"
        />
      </q-tabs>
    </q-header>
    <q-page-container>
      <router-view />
      <q-dialog v-model="showCart" :backdrop-filter="sepia">
        <ShoppingCart />
      </q-dialog>
    </q-page-container>
    <q-footer>
    <q-toolbar class="bg-grey text-white">
      <q-toolbar-title>
      <span>
        <q-icon name="fa-regular fa-copyright" size="sm" class="q-pa-xs" />
        NutriTech-2024
      </span>
      </q-toolbar-title>
      <q-icon name="fa-regular fa-envelope" color="brown" size="sm" class="q-pa-xs" @click="handleContact('Email')"/>
      <q-icon name="fa-brands fa-whatsapp" color="green-8" size="sm" class="q-pa-xs" @click="handleContact('WhatsApp')"/>
      <q-icon name="fa-brands fa-facebook" color="blue-8" size="sm" class="q-pa-xs" @click="handleContact('Facebook')"/>
      <q-icon name="fa-brands fa-instagram" color="red-8" size="sm" class="q-pa-xs" @click="handleContact('Instagram')"/>
    </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import SettingsComponent from 'src/components/SettingsComponent.vue'
import ShoppingCart from 'src/components/ShoppingCart.vue'
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const $q = useQuasar()
const sepia = ref('sepia(90%)')
const showCart = ref(false)

function alert (tit, msg) {
  $q.dialog({
    title: tit,
    message: msg
  })
}

const handleContact = (media) => {
  alert(media, t(media + '.message'))
}

const handleShoppingCart = () => {
  showCart.value = !showCart.value
}

</script>
