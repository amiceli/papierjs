<template>
    <Story
        :layout="{ type: 'grid', width: '90%' }"
        title="Components/Icon/Overview"
    >
        <Variant title="Types">
            <p>
                We used <a href="https://github.com/halfmage/pixelarticons">
                    pixelarticons
                </a> for icons
            </p>
            <p-icon
                :color="state.color"
                :icon="state.icon"
                :size="state.size"
            ></p-icon>
        </Variant>
        <Variant title="All icons">
            <p-input-text
                :dark="darkMode"
                label="Search an icon"
                :placeholder="`${iconList.length} icons avalaible`"
                block
                :value="state.search"
                @input="state.search = $event.target.value"
            ></p-input-text>
            <br>
            <div class="icons-grid">
                <div
                    class="icons-grid__item"
                    v-for="i in showIcons"
                    :key="i"
                >
                    <p-icon
                        :color="state.color"
                        :icon="i"
                        :size="state.size"
                    ></p-icon>
                    {{ i }}
                </div>
            </div>
            <template #source>No need</template>
        </Variant>

        <template #controls>
            <HstText
                v-model="state.color"
                title="icon color"
            />
            <HstSelect
                v-model="state.icon"
                title="Icon"
                :options="iconList"
            />
            <HstNumber
                v-model="state.size"
                :step="1"
                title="Icon size"
                min="1"
            />
        </template>
    </Story>
</template>

<script lang="ts" setup>
import { useDarkMode } from '@h/useDarkMode'
import { computed, reactive } from 'vue'
import { icons } from '../icons'

const { darkMode } = useDarkMode()

const state = reactive({
    color: 'inherit',
    icon: 'code',
    size: 30,
    search: '',
})
const iconList = Object.keys(icons)

const showIcons = computed(() => {
    return iconList.filter((t) => t.includes(state.search))
})
</script>

<style lang="scss" scoped>
p {
    font-size: 20px;
    margin-top: 0;

    a {
        color: inherit;
        font-weight: 900;
    }
}

.icons-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-content: center;
    gap: 20px;

    &__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>
