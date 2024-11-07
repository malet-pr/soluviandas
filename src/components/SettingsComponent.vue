<template>
  <div>
    <q-btn-dropdown
      unelevated
      color="primary"
      icon="settings"
      size="md"
    >
      <div class="row no-wrap q-px-md q-py-lg">
        <div class="column">
          <div class="row items-center no-wrapq-px-md q-py-sm">
            <q-icon
              name="light_mode"
              color="orange"
              size="20px"
            />
            <q-toggle
              v-model="mode"
              size="sm"
              color="primary"
              @update:model-value="$q.dark.toggle()"
            />
            <q-icon
              name="dark_mode"
              color="orange"
              size="20px"
            />
          </div>
          <div class="row items-center no-wrap q-py-sm">
            <img src="/icons/united-states.jpg" size="20px">
            <q-toggle
              v-model="lang"
              size="sm"
              color="primary"
              @update:model-value="setLang"
            />
            <img src="/icons/argentina.jpg" size="20px">
          </div>
        </div>

        <q-separator
          vertical
          inset
          class="q-mx-lg"
        />

        <div class="column items-center">
          <q-avatar size="45px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>

          <div class="text-subtitle1 q-mt-md q-mb-xs">
            {{ $t('settings.name') }}
          </div>

          <q-btn
            v-close-popup
            color="primary"
            :label="$t('settings.btn')"
            push
            size="sm"
            @click="router.push('/')"
          />
        </div>
      </div>
    </q-btn-dropdown>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const router = useRouter()

const $q = useQuasar()
const mode = ref(true)

const { locale } = useI18n()
const lang = ref(true)

const setLang = () => {
  if (lang.value) {
    locale.value = 'es-AR'
  } else {
    locale.value = 'en-US'
  }
}

</script>
