<template>
    <Story
        :layout="{ type: 'grid', width: '90%' }"
        title="Form/Slider/Overview"
    >
        <Variant title="Sample">
            <p-slider
                :dark="darkMode"
                :value="state.value"
                @change="state.value = $event.detail"
                :min="state.min"
                :max="state.max"
            ></p-slider>
        </Variant>

        <Variant title="Size">
            <p-slider
                :dark="darkMode"
                :value="state.value"
                @change="state.value = $event.detail"
                :min="state.min"
                :max="state.max"
                block
            ></p-slider>
        </Variant>

        <template #controls>
            <HstCheckbox
                v-model="darkMode"
                title="Dark mode"
            />
            <HstNumber
                v-model="state.min"
                :step="1"
                title="Min"
                :max="state.max"
            />
            <HstNumber
                v-model="state.max"
                :step="1"
                :min="state.min"
                title="max"
            />
            <HstNumber
                v-model="state.value"
                :step="1"
                :min="state.min"
                :max="state.max"
                title="Slider value"
            />
        </template>
    </Story>
</template>

<script lang="ts" setup>
import { useDarkMode } from '@h/useDarkMode'
import { reactive } from 'vue'

const { darkMode } = useDarkMode()

const state = reactive({
    min: 0,
    max: 100,
    value: 69,
})
</script>
