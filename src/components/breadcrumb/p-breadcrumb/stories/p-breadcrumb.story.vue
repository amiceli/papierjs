<template>
    <Story
        :layout="{ type: 'grid', width: '90%' }"
        title="Components/Breadcrumb/Overview"
    >
        <Variant title="Overview">
            <p-breadcrumb :dark="darkMode">
                <p-breadcrumb-item link="#">
                    <span>Histoire</span>
                </p-breadcrumb-item>
                <p-breadcrumb-item link="#">
                    <span>Livre</span>
                </p-breadcrumb-item>
                <p-breadcrumb-item>
                    <span>Chapitre</span>
                </p-breadcrumb-item>
            </p-breadcrumb>
        </Variant>

        <Variant title="One link">
            <p-breadcrumb :dark="darkMode">
                <p-breadcrumb-item link="#">
                    <span>Maison</span>
                </p-breadcrumb-item>
            </p-breadcrumb>
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

const { darkMode } = useDarkMode()
</script>

<style lang="scss" scoped></style>
