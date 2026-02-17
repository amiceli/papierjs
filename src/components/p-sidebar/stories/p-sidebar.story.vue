<template>
    <Story
        :layout="{ type: 'grid', width: '90%' }"
        title="Navigation/Sidebar/Overview"
    >
        <Variant title="Sample">
            <p-leaf>
                <p>
                    sidebar takes 100% of parent height.
                </p>
            </p-leaf>
            <div class="sidebar-parent">
                <p-sidebar
                    logo="https://raw.githubusercontent.com/amiceli/papierjs/refs/heads/main/src/assets/papierjs.webp"
                    title="PapierJS"
                    :user="state.user"
                >
                    <p-sidebar-item
                        icon="home"
                        url="1home"
                        :active="state.activeMenu === 'home'"
                    >
                        Home
                    </p-sidebar-item>
                    <p-sidebar-item
                        icon="heart"
                        url="#contact"
                        :active="state.activeMenu === 'contact'"
                    >
                        Contact
                    </p-sidebar-item>
                    <p-sidebar-item
                        icon="help"
                        url="#contact"
                        :active="state.activeMenu === 'support'"
                    >
                        Support
                    </p-sidebar-item>
                </p-sidebar>
            </div>
        </Variant>

        <template #controls>
            <HstCheckbox
                v-model="darkMode"
                title="Dark mode"
            />
            <HstText
                v-model="state.user.name"
                title="User name"
            />
            <HstText
                v-model="state.user.email"
                title="User email"
            />
            <HstText
                v-model="state.user.photo"
                title="User profile picture"
            />
            <HstSelect
                v-model="state.activeMenu"
                :title="'My really long label'"
                :options="['home', 'contact', 'support']"
            />
        </template>
    </Story>
</template>

<script lang="ts" setup>
import { useDarkMode } from '@h/useDarkMode'
import { reactive } from 'vue'

const { darkMode } = useDarkMode()

const state = reactive({
    user: {
        name: 'Niko Bellic',
        email: 'n.bellic@game.com',
        photo: 'https://fastly.picsum.photos/id/1062/200/200.jpg?hmac=F_trr44XLYeth1u5FIqJIgtD4pR7WOlzKZ2xrQ3tzww',
    },
    activeMenu: 'home',
})
</script>

<style lang="scss" scoped>
.sidebar-parent {
    height: 600px;
}
</style>
