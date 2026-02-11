<template>
    <slot></slot>
</template>

<script lang="ts" setup>
// @ts-expect-error
import { defineCustomElements } from '/loader'

defineCustomElements()
</script>
