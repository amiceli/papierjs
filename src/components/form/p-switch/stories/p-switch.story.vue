<template>
    <Story
        :layout="{ type: 'grid', width: '90%' }"
        title="Form/Switch/Overview"
    >
        <Variant title="Sample">
            <p-switch
                :dark="darkMode"
                :checked="state.checked"
            ></p-switch>
        </Variant>

        <Variant title="Styles">
            <p-leaf>
                <table>
                    <thead>
                        <tr>
                            <th>
                                round
                            </th>
                            <th>
                                square
                            </th>
                            <th>
                                round & square
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p-switch
                                    :dark="darkMode"
                                    :checked="state.checked"
                                    round
                                ></p-switch>
                            </td>
                            <td>
                                <p-switch
                                    :dark="darkMode"
                                    :checked="state.checked"
                                    square
                                ></p-switch>
                            </td>
                            <td>
                                <p-switch
                                    :dark="darkMode"
                                    :checked="state.checked"
                                    square
                                    round
                                ></p-switch>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </p-leaf>
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
        </template>
    </Story>
</template>

<script lang="ts" setup>
import { useDarkMode } from '@h/useDarkMode'
import { reactive } from 'vue'

const { darkMode } = useDarkMode()

const state = reactive({
    checked: false,
})
</script>

<style scoped>
table th {
    min-width: 200px;
}
</style>
