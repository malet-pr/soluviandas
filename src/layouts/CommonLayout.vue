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
            icon="local_grocery_store" size="sm"
            @click="handleShoppingCart"
            style="width: 50px;" />
          </div>
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs class="q-px-md">
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
      class="bg-grey-8 text-white"
    >
      <q-toolbar>
        <q-toolbar-title>
          <div>CopyRight, etc</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import SettingsComponent from 'src/components/SettingsComponent.vue'

const handleShoppingCart = () => {
  alert('manejar carrito')
}

</script>
