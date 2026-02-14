<template>
    <Story
        :layout="{ type: 'grid', width: '90%' }"
        title="Components/Alert/Overview"
    >
        <Variant title="Alerts">
            <p-alert
                :dark="darkMode"
                type="primary"
            >
                primary
            </p-alert>
            <p-alert
                :dark="darkMode"
                type="secondary"
            >
                secondary
            </p-alert>
            <p-alert
                :dark="darkMode"
                type="success"
            >
                success
            </p-alert>
            <p-alert
                :dark="darkMode"
                type="warning"
            >
                warning
            </p-alert>
            <p-alert
                :dark="darkMode"
                type="danger"
            >
                danger
            </p-alert>
        </Variant>

        <Variant title="Alerts">
            <p-alert
                closable
                type="primary"
                :dark="darkMode"
                @close="state.firstClosed = true"
                v-show="!state.firstClosed"
            >
                {{ state.title }}
            </p-alert>
            <p-alert
                @close="state.twoClosed = true"
                v-show="!state.twoClosed"
                closable
                type="danger"
                :dark="darkMode"
            >
                {{ state.title }}
            </p-alert>
        </Variant>



        <template #controls>
            <HstCheckbox
                v-model="darkMode"
                title="Dark mode"
            />
            <HstCheckbox
                v-model="state.firstClosed"
                title="Closed alert"
            />
            <HstCheckbox
                v-model="state.twoClosed"
                title="Closed alert"
            />
            <HstText
                v-model="state.title"
                title="Alert content"
            />
        </template>
    </Story>
</template>

<script lang="ts" setup>
import { useDarkMode } from '@h/useDarkMode'
import { reactive } from 'vue'

const { darkMode } = useDarkMode()

const state = reactive({
    firstClosed: false,
    twoClosed: false,
    title: 'Close me !',
})
</script>

<style scoped>
table th {
    min-width: 200px;
}
</style>
