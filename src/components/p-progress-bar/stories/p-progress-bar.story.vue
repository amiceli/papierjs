<template>
    <Story
        :layout="{ type: 'grid', width: '90%' }"
        title="Components/Progress Bar/Overview"
    >
        <Variant title="Types">
            <p-progress-bar
                :value="state.value"
                :type="state.type"
                :dark="darkMode"
            >
                {{ state.content }}
            </p-progress-bar>
        </Variant>

        <Variant title="Auto mode">
            <p-progress-bar
                value="0"
                :type="state.type"
                :dark="darkMode"
                :auto="state.auto"
            >10%</p-progress-bar>
        </Variant>

        <Variant title="Striped">
            <p-progress-bar
                :value="state.value"
                :type="state.type"
                :dark="darkMode"
                striped
            >10%</p-progress-bar>
        </Variant>

        <template #controls>
            <HstCheckbox
                v-model="darkMode"
                title="Dark mode"
            />
            <HstSelect
                v-model="state.type"
                :title="'My really long label'"
                :options="types"
            />
            <HstText
                v-model="state.content"
                title="Progress bar content"
            />
            <HstNumber
                v-model="state.auto"
                min="0"
                title="Auto mode timeout (ms)"
            />
        </template>
    </Story>
</template>

<script lang="ts" setup>
import { useDarkMode } from '@h/useDarkMode'
import { reactive } from 'vue'

const { darkMode } = useDarkMode()

const state = reactive({
    type: 'secondary',
    value: 20,
    content: '20%',
    auto: 3000,
})
const types = [
    'secondary',
    'success',
    'warning',
    'danger',
    'muted',
    'primary',
]
</script>

<style lang="scss" scoped></style>
