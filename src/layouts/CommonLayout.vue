<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      reveal
      elevated
      class="bg-primary text-white"
    >
      <q-toolbar>
        <q-toolbar-title class="flex justify-between">
          <div class="">
            <h4>{{ $t('appTitle') }}</h4>
          </div>
          <div class="q-pa-md">
            <q-chip
              color="secondary"
              text-color="black"
              size="12px"
              label="ENGLISH"
            />
            <q-toggle
              v-model="lang"
              size="lg"
              color="white"
              keep-color
              @update:model-value="setLang"
            />
            <q-chip
              color="secondary"
              text-color="black"
              size="12px"
            >
              ESPAÑOL
            </q-chip>
            <q-icon
              name="light_mode"
              color="black"
              size="30px"
            />
            <q-toggle
              v-model="mode"
              size="lg"
              color="white"
              keep-color
              @update:model-value="setMode"
            />
            <q-icon
              name="dark_mode"
              color="black"
              size="30px"
            />
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
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const $q = useQuasar()
const mode = ref(true)

const { locale } = useI18n()
const lang = ref(true)

const setMode = () => {
  $q.dark.toggle()
}

const setLang = () => {
  if (lang.value) {
    locale.value = 'es-AR'
  } else {
    locale.value = 'en-US'
  }
}

</script>
