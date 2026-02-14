<template>
    <Story
        :layout="{ type: 'grid', width: '90%' }"
        title="Components/Dropdown/Overview"
    >
        <Variant title="Overview">
            <p-leaf>
                <p>
                    By default dropdown update and display selected value :
                </p>
            </p-leaf>

            <p-dropdown
                :value="state.selected"
                @select="state.selected = $event.detail"
                :dark="darkMode"
            >
                <p-dropdown-item
                    value="Vue"
                    :selected="state.selected === 'Vue'"
                >Vue Js</p-dropdown-item>
                <p-dropdown-item
                    :selected="state.selected === 'Nuxt'"
                    value="Nuxt"
                >Nuxt</p-dropdown-item>
                <p-dropdown-item
                    :selected="state.selected === 'Histoire'"
                    value="Histoire"
                >Histoire</p-dropdown-item>
            </p-dropdown>
        </Variant>

        <Variant title="Placeholder">
            <p-dropdown
                :dark="darkMode"
                :placeholder="state.placeholder"
            >
                <p-dropdown-item value="Vue js">Vue Js</p-dropdown-item>
                <p-dropdown-item value="Nest">Nest</p-dropdown-item>
                <p-dropdown-item value="Storybook">Storybook</p-dropdown-item>
            </p-dropdown>
        </Variant>

        <Variant title="Prevent selected">
            <p-leaf>
                <p>
                    You can precent component select clicked item
                </p>
            </p-leaf>

            <p-dropdown
                :dark="darkMode"
                :placeholder="state.placeholder"
                :preventSelected="true"
            >
                <p-dropdown-item value="Vue js">Vue Js</p-dropdown-item>
                <p-dropdown-item value="Nest">Nest</p-dropdown-item>
                <p-dropdown-item value="Storybook">Storybook</p-dropdown-item>
            </p-dropdown>
        </Variant>

        <template #controls>
            <HstCheckbox
                v-model="darkMode"
                title="Dark mode"
            />
            <HstText
                v-model="state.placeholder"
                title="Placeholder"
            />
        </template>
    </Story>
</template>

<script lang="ts" setup>
import { useDarkMode } from '@h/useDarkMode'
import { reactive } from 'vue'

const { darkMode } = useDarkMode()
const state = reactive({
    selected: 'Vue',
    placeholder: 'Choose a framework',
})
</script>

<style lang="scss" scoped>
p {
    margin-top: 0;
}
</style>
