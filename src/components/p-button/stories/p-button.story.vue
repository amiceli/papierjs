<template>
    <Story
        :layout="{ type: 'grid', width: '90%' }"
        title="p-button/Overview"
    >
        <Variant title="Default">
            <p-button
                :dark="state.darkMode"
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
                :dark="state.darkMode"
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
                :dark="state.darkMode"
                type="success"
                :disabled="state.disabled"
                large
            >
                Large
            </p-button>
            <p-button
                :dark="state.darkMode"
                type="success"
                :disabled="state.disabled"
                small
            >
                small
            </p-button>
            <br>
            <div style="margin-top: 20px;; width : 400px">
                <p-button
                    :dark="state.darkMode"
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
                :dark="state.darkMode"
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
                v-model="state.darkMode"
                title="Dark mode"
            />
            <HstCheckbox
                v-model="state.disabled"
                title="Disabled"
            />
        </template>
    </Story>
</template>

<docs lang="md"># My documentation

Checkout this [cool video](https://www.youtube.com/watch?v=dQw4w9WgXcQ)!</docs>

<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive({
    darkMode: false,
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
