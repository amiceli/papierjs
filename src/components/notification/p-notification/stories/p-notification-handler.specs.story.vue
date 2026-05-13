<template>
    <Story title="Components/Notification/Handler/Specs">
        <div :class="['specs-readme', dark ? 'is-dark' : 'is-light']">
            <MarkdownRender
                :content="readme"
                :isDark="dark"
            />
        </div>
        <template #source>No need</template>
    </Story>
</template>

<script lang="ts" setup>
import MarkdownRender from 'markstream-vue'
import readme from '../../p-notification-handler/readme.md?raw'
import 'markstream-vue/index.css'
import '@h/specs.css'
import { useSpecsDarkMode } from '@h/useSpecsDarkMode'

const { dark } = useSpecsDarkMode()
</script>
