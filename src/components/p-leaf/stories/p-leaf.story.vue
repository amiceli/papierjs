<template>
    <Story
        :layout="{ type: 'grid', width: '90%' }"
        title="Components/Leaf/Overview"
    >
        <Variant title="Sample">
            <div>
                <p-leaf :dark="darkMode">
                    <p>
                        <b>p-leaf</b> allowes to use <b>papercss</b>
                        style/class in specific DOM element.
                    </p>
                </p-leaf>
            </div>
            <MarkdownRender
                :content="sample"
                :isDark="true"
            />
            <p-leaf :dark="darkMode">
                <span class="badge">123</span>
            </p-leaf>

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
import MarkdownRender from 'markstream-vue'
import 'markstream-vue/index.css'

const { darkMode } = useDarkMode()
const sample = `
    <p-leaf>
        <span class="badge">123</span>
    </p-leaf>
`
</script>
