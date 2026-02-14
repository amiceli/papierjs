<template>
    <Story
        :layout="{ type: 'grid', width: '90%' }"
        title="Form/Input Text/Overview"
    >
        <Variant title="Sample">
            <p-input-text
                :dark="darkMode"
                :disabled="state.disabled"
                :value="state.value"
                :placeholder="state.placeholder"
                :label="state.label"
                :required="state.required"
            />
        </Variant>
        <Variant title="With errors">
            <p-input-text
                :dark="darkMode"
                :disabled="state.disabled"
                :value="state.value"
                :placeholder="state.placeholder"
                :label="state.label"
                :required="state.required"
                :error="state.error"
            />
        </Variant>
        <Variant title="With icon">
            <div>
                <p-leaf>
                    <p>
                        Sams as <b>p-icon</b> you can use
                        <a
                            href="https://pixelarticons.com/"
                            target="_blank"
                        >
                            pixelarticons
                        </a> icons
                    </p>
                </p-leaf>
            </div>
            <p-input-text
                :dark="darkMode"
                :disabled="state.disabled"
                :value="state.value"
                :placeholder="state.placeholder"
                :label="state.label"
                :required="state.required"
                :icon="state.icon"
            />
        </Variant>
        <Variant title="Size">
            <p-input-text
                :dark="darkMode"
                :disabled="state.disabled"
                :value="state.value"
                :placeholder="state.placeholder"
                label="Block input text"
                :required="state.required"
                :icon="state.icon"
                :block="true"
            />
        </Variant>

        <template #controls>
            <HstCheckbox
                v-model="darkMode"
                title="Dark mode"
            />
            <HstCheckbox
                v-model="state.required"
                title="Required"
            />
            <HstCheckbox
                v-model="state.disabled"
                title="Disabled"
            />

            <HstText
                v-model="state.label"
                :title="'label'"
            />
            <HstText
                v-model="state.placeholder"
                title="placeholder"
            />
            <HstText
                v-model="state.error"
                title="Error"
            />
            <HstText
                v-model="state.icon"
                title="Icon"
            />

            <HstSelect
                v-model="state.icon"
                title="Input icon"
                :options="Object.keys(icons)"
            />
        </template>
    </Story>
</template>

<script lang="ts" setup>
import { useDarkMode } from '@h/useDarkMode'
import { reactive } from 'vue'
import { icons } from '@/components/p-icon/icons'

const { darkMode } = useDarkMode()

const state = reactive({
    disabled: false,
    required: false,
    value: null,
    placeholder: 'Dot Paper',
    label: 'Vintage input text !',
    error: 'Video game is reduired',
    icon: 'search',
})
</script>
