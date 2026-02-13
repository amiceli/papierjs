<template>
    <Story
        :layout="{ type: 'grid', width: '90%' }"
        title="p-button/Overview"
    >
        <Variant title="Types">
            <p-button
                :dark="darkMode"
                v-for="b in buttons"
                :key="`btn-${b}`"
                :type="b"
                :disabled="state.disabled"
            >
                {{ b }}
            </p-button>
        </Variant>
        <Variant title="Outline">
            <p-button
                :dark="darkMode"
                v-for="b in buttons"
                :type="b"
                outline
                :key="`out-btn-${b}`"
                :disabled="state.disabled"
            >
                {{ b }}
            </p-button>
        </Variant>
        <Variant title="Size">
            <p-button
                :dark="darkMode"
                type="success"
                :disabled="state.disabled"
                large
            >
                Large
            </p-button>
            <p-button
                :dark="darkMode"
                type="success"
                :disabled="state.disabled"
                small
            >
                small
            </p-button>
            <br>
            <div style="margin-top: 20px;; width : 400px">
                <p-button
                    :dark="darkMode"
                    type="danger"
                    :disabled="state.disabled"
                    block
                >
                    block
                </p-button>
            </div>
        </Variant>
        <Variant title="Loading">
            <p-button
                :dark="darkMode"
                v-for="b in buttons"
                :type="b"
                loading
                :key="`load-btn-${b}`"
            >
                {{ b }}
            </p-button>
        </Variant>

        <template #controls>
            <HstCheckbox
                v-model="darkMode"
                title="Dark mode"
            />
            <HstCheckbox
                v-model="state.disabled"
                title="Disabled"
            />
        </template>
    </Story>
</template>

<script lang="ts" setup>
import { useDarkMode } from '@h/useDarkMode';
import { reactive } from 'vue'

const { darkMode } = useDarkMode()

const state = reactive({
    disabled: false,
})

const buttons = [
    'success',
    'secondary',
    'primary',
    'danger',
    'warning',
]
</script>

<style lang="scss" scoped>
p-button {
    margin-right: 10px;
}
</style>
