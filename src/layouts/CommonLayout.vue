<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      reveal
      elevated
      class="bg-primary text-white"
    >
      <q-toolbar>
        <q-toolbar-title class="row">
          <h4>{{ $t('appTitle') }}</h4>
          <q-space />
          <div class="columns">
            <SettingsComponent />
            <q-btn unelevated class="q-pt-sm"
            icon="local_grocery_store" size="md"
            @click="handleShoppingCart"
            style="width: 50px;" />
          </div>
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs class="q-px-sm">
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
    </q-page-container>
    <q-footer
      bordered
      class="bg-grey-8 text-white text-center"
    >
      <q-toolbar>
        <q-toolbar-title>
          <div>Copyright, etc</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import SettingsComponent from 'src/components/SettingsComponent.vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const $q = useQuasar()

function alert (tit, msg) {
  $q.dialog({
    title: tit,
    message: msg
  })
}

const handleShoppingCart = () => {
  alert(t('cartDialog.title'), t('cartDialog.message'))
}

</script>
