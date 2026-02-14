<template>
    <Story
        :layout="{ type: 'grid', width: '90%' }"
        title="Components/Accordion/Overview"
    >
        <Variant title="Sample">
            <p-accordion
                :title="state.title"
                :dark="darkMode"
                :open="state.open"
            >
                <p-leaf>
                    <p>
                        Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa
                    </p>
                </p-leaf>
            </p-accordion>
        </Variant>
        <template #controls>
            <HstCheckbox
                v-model="darkMode"
                title="Dark mode"
            />
            <HstCheckbox
                v-model="state.open"
                title="Open"
            />
            <HstText
                v-model="state.title"
                title="Title"
            />
        </template>
    </Story>
</template>

<script lang="ts" setup>
import { useDarkMode } from '@h/useDarkMode'
import { reactive } from 'vue'

const { darkMode } = useDarkMode()

const state = reactive({
    title: 'Show code',
    open: false,
})
</script>
