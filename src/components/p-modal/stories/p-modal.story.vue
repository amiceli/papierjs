<template>
    <Story
        :layout="{ type: 'grid', width: '90%' }"
        title="Components/Modal/Overview"
    >
        <Variant title="Sample">
            <p-button
                :dark="darkMode"
                @click="openModal()"
                type="secondary"
            >
                Open modal
            </p-button>
            <p-modal
                :dark="darkMode"
                ref="modal"
            >
                <span slot="title">Modal title</span>
                <span slot="sub-title">Modal sub title</span>
                <span slot="text">This is an example of modal which is implemented with pure CSS! :D</span>
                <p-button
                    type="warning"
                    @click="closeModal()"
                >Close it !</p-button>
            </p-modal>
        </Variant>

        <template #controls>
            <HstCheckbox
                v-model="darkMode"
                title="Dark mode"
            />
        </template>
    </Story>
</template>

<script lang="ts" setup>
import { useDarkMode } from '@h/useDarkMode'
import { useTemplateRef } from 'vue'

const { darkMode } = useDarkMode()
const modal = useTemplateRef('modal')

function openModal() {
    modal.value?.open()
}

function closeModal() {
    modal.value?.close()
}
</script>
