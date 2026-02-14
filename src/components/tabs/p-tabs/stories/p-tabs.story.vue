<template>
    <Story
        :layout="{ type: 'grid', width: '90%' }"
        title="Components/Tabs/Overview"
    >
        <Variant title="Sample">
            <p-tabs :dark="darkMode">
                <p-tab title="Assassin's Creed Unity">
                    <p-leaf>
                        <ul>
                            <li>
                                Release Date: November 2014
                            </li>
                            <li>
                                Player Rating: Mixed or average reviews, with a user
                                score of 5.7 out of 10 on Metacritic.
                            </li>
                        </ul>
                    </p-leaf>
                </p-tab>
                <p-tab
                    title="Assassin's Creed Mirage"
                    selected
                >
                    <p-leaf>
                        <ul>
                            <li>
                                Release Date: October 17, 2024
                            </li>
                            <li>
                                Player Rating: Mostly Positive reviews on Steam,
                                with approximately 75% positive feedback.
                            </li>
                        </ul>
                    </p-leaf>
                </p-tab>
            </p-tabs>
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
