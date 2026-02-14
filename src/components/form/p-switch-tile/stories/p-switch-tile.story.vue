<template>
    <Story
        :layout="{ type: 'grid', width: '90%' }"
        title="Form/Switch Tile/Overview"
    >
        <Variant title="Sample">
            <p-switch-tile
                :dark="darkMode"
                :checked="state.checked"
            >
                <span slot="checked-text">
                    {{ state.checkedText }}
                </span>
                <span slot="unchecked-text">
                    {{ state.uncheckedText }}
                </span>
            </p-switch-tile>
        </Variant>

        <Variant title="All colors">
            <p-switch-tile
                checked-background="warning"
                :checked="state.checked"
                :dark="darkMode"
            >
                <span slot="checked-text">warning</span>
                <span slot="unchecked-text">default</span>
            </p-switch-tile>

            <p-switch-tile
                checked-background="primary"
                :checked="state.checked"
                :dark="darkMode"
            >
                <span slot="checked-text">primary</span>
                <span slot="unchecked-text">default</span>
            </p-switch-tile>

            <p-switch-tile
                checked-background="secondary"
                :checked="state.checked"
                :dark="darkMode"
            >
                <span slot="checked-text">secondary</span>
                <span slot="unchecked-text">default</span>
            </p-switch-tile>

            <p-switch-tile
                checked-background="danger"
                :checked="state.checked"
                :dark="darkMode"
            >
                <span slot="checked-text">danger</span>
                <span slot="unchecked-text">default</span>
            </p-switch-tile>

            <p-switch-tile
                checked-background="noted"
                :checked="state.checked"
                :dark="darkMode"
            >
                <span slot="checked-text">noted</span>
                <span slot="unchecked-text">default</span>
            </p-switch-tile>
        </Variant>

        <template #controls>
            <HstCheckbox
                v-model="darkMode"
                title="Dark mode"
            />
            <HstCheckbox
                v-model="state.checked"
                title="Checked"
            />
            <HstText
                v-model="state.checkedText"
                title="Checked slot text"
            />
            <HstText
                v-model="state.uncheckedText"
                title="Unchecked slot text"
            />
        </template>
    </Story>
</template>

<script lang="ts" setup>
import { useDarkMode } from '@h/useDarkMode'
import { reactive } from 'vue'

const { darkMode } = useDarkMode()

const state = reactive({
    checked: false,
    checkedText: 'Yes',
    uncheckedText: 'No',
})
</script>

<style scoped>
table th {
    min-width: 200px;
}
</style>
