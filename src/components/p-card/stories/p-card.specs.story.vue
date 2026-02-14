<template>
    <Story title="Components/Card/Specs">
        <div class="markstream-vue">
            <MarkdownRender
                :content="readme"
                :isDark="true"
            />
        </div>
        <template #source>No need</template>
    </Story>
</template>

<script lang="ts" setup>
import MarkdownRender from 'markstream-vue'
import readme from '../readme.md?raw'
import 'markstream-vue/index.css'
</script>

<style scoped>
.markstream-vue {
    color: white;
}
</style>
