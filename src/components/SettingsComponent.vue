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
          <q-btn-dropdown
            class="q-mt-md"
            flat
            color="primary"
            :label="$t('language')"
            v-model="showLanguages"
          >
            <div class="q-pa-lg">
              <q-option-group v-show="showLanguages"
                v-model="selection"
                :options="language"
                color="primary"
                @update:model-value="switchLanguage"
                name="lang_sel"
              >
              <template #label="lang">
                  {{ lang.label }}
              </template>
              </q-option-group>
            </div>
          </q-btn-dropdown>
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
import { ref, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const router = useRouter()
const $q = useQuasar()
const mode = ref(true)
const { locale } = useI18n()
const selection = ref(locale.value)
const showLanguages = ref(false)

const language = [
  {value: 'es-AR', label: 'Español'},
  {value: 'en-US', label: 'English'}
]

const switchLanguage = (value) => {
  locale.value = value
  showLanguages.value = false
}

</script>
