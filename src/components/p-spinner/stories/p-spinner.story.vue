<template>
    <Story
        :layout="{ type: 'grid', width: '90%' }"
        title="Components/Spinner/Overview"
    >
        <Variant title="Sample">
            <div>
                <p-leaf>
                    <p>
                        You can pass <i>color</i> as props or spinner use current color :
                    </p>
                </p-leaf>
            </div>

            <p-spinner
                :dark="darkMode"
                :color="state.color"
            ></p-spinner>
        </Variant>
        <Variant title="Size">
            <div>
                <p-leaf>
                    <p>
                        You can use a <b>large</b> p-spinner :
                    </p>
                </p-leaf>
            </div>
            <p-spinner
                :dark="darkMode"
                large
                :color="state.color"
            ></p-spinner>
        </Variant>

        <template #controls>
            <HstCheckbox
                v-model="darkMode"
                title="Dark mode"
            />
            <HstColorSelect
                v-model="state.color"
                title="Spinner color"
            />
        </template>
    </Story>
</template>

<script lang="ts" setup>
import { useDarkMode } from '@h/useDarkMode'
import { reactive } from 'vue'

const state = reactive({
    color: '#eee',
})

const { darkMode } = useDarkMode()
</script>
