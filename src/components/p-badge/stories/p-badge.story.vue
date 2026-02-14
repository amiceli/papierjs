<template>
    <Story
        :layout="{ type: 'grid', width: '90%' }"
        title="Components/Badge/Overview"
    >
        <Variant title="Sample">
            <div>
                <p-leaf>
                    <p>
                        Badge inherit parent `font-size` and `font-family`.
                    </p>
                </p-leaf>
            </div>

            <h1 style="font-size : 40px">
                <p-badge :dark="darkMode">papierjs</p-badge>
            </h1>
            <h2>
                <p-badge
                    :dark="darkMode"
                    type="secondary"
                >
                    secondary
                </p-badge>
            </h2>
            <h3>
                <p-badge
                    :dark="darkMode"
                    type="success"
                >
                    success
                </p-badge>
            </h3>
            <h4>
                <p-badge
                    :dark="darkMode"
                    type="warning"
                >
                    warning
                </p-badge>
            </h4>
            <h5>
                <p-badge
                    :dark="darkMode"
                    type="danger"
                >
                    danger
                </p-badge>
            </h5>
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
