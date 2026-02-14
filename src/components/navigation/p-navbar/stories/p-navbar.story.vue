<template>
    <Story
        :layout="{ type: 'grid', width: '90%' }"
        title="Navigation/Navbar/Overview"
    >
        <Variant title="Overview">
            <p-navbar
                style="
                    width : 90%;
                    display : block;
                    margin : auto;
                "
                :split="state.split"
                :fixed="state.fixed"
                :dark="darkMode"
                :root-title="state.rootTitle"
                :root-link="state.rootLink"
            >
                <p-navbar-item
                    href="/"
                    target="_blank"
                    :dark="darkMode"
                >
                    Home
                </p-navbar-item>
                <p-navbar-item
                    href="/"
                    target="_blank"
                    icon="github"
                    :dark="darkMode"
                >
                    Github
                </p-navbar-item>
            </p-navbar>
        </Variant>

        <Variant title="Item with icon">
            <div>
                <p-leaf>
                    <p>
                        You can any <b>lsi-icon</b> icons :
                    </p>
                </p-leaf>
            </div>
            <p-navbar
                style="
                    width : 90%;
                    display : block;
                    margin : auto;
                "
                :fixed="state.fixed"
                :split="state.split"
                :dark="darkMode"
                :root-title="state.rootTitle"
                :root-link="state.rootLink"
            >
                <p-navbar-item
                    href="/"
                    target="_blank"
                    :dark="darkMode"
                >
                    Home
                </p-navbar-item>
                <p-navbar-item
                    href="/"
                    target="_blank"
                    :icon="state.icon"
                    :dark="darkMode"
                >
                    Github
                </p-navbar-item>
            </p-navbar>
        </Variant>

        <template #controls>
            <HstCheckbox
                v-model="darkMode"
                title="Dark mode"
            />
            <HstCheckbox
                v-model="state.split"
                title="Split mode"
            />
            <HstCheckbox
                v-model="state.fixed"
                title="Fixed Navbar"
            />
            <HstText
                v-model="state.rootTitle"
                title="Root titile"
            />
            <HstText
                v-model="state.rootLink"
                title="Root link"
            />
            <HstSelect
                v-model="state.icon"
                title="Icon"
                :options="iconList"
            />
        </template>
    </Story>
</template>

<script lang="ts" setup>
import { useDarkMode } from '@h/useDarkMode'
import { reactive } from 'vue'
import { icons } from '@/components/p-icon/icons'

const iconList = Object.keys(icons)
const { darkMode } = useDarkMode()
const state = reactive({
    split: true,
    fixed: false,
    rootTitle: 'Get PapierJS',
    rootLink: '/',
    icon: 'github',
})
</script>

<style lang="scss" scoped></style>
