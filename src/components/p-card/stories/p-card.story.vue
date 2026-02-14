<template>
    <Story
        :layout="{ type: 'grid', width: '90%' }"
        title="Components/Card/Overview"
    >
        <Variant title="Sample">
            <div style="width: 20rem">
                <p-card
                    :dark="darkMode"
                    :radius="state.radius"
                >
                    <div slot="title">
                        {{ state.title }}
                    </div>
                    <div slot="subtitle">
                        {{ state.subtitle }}
                    </div>
                    <div slot="text">
                        {{ state.text }}
                    </div>
                    <p-button type="secondary">Next</p-button>
                </p-card>
            </div>
        </Variant>

        <Variant title="Header & footer">
            <div style="width: 30em">
                <p-card
                    :dark="darkMode"
                    :radius="state.radius"
                >
                    <div slot="header">
                        {{ state.header }}
                    </div>
                    <div slot="footer">
                        {{ state.footer }}
                    </div>
                    <div slot="title">
                        {{ state.title }}
                    </div>
                    <div slot="subtitle">
                        {{ state.subtitle }}
                    </div>
                    <div slot="text">
                        {{ state.text }}
                    </div>
                    <p-button type="secondary">Next</p-button>
                </p-card>
            </div>
        </Variant>

        <Variant title="With image">
            <div style="width: 20rem">
                <p-card
                    :dark="darkMode"
                    :radius="state.radius"
                >
                    <div slot="header">
                        {{ state.header }}
                    </div>
                    <div slot="footer">
                        {{ state.footer }}
                    </div>
                    <div slot="title">
                        {{ state.title }}
                    </div>
                    <div slot="subtitle">
                        {{ state.subtitle }}
                    </div>
                    <div slot="text">
                        {{ state.text }}
                    </div>
                    <p-button type="secondary">Next</p-button>
                </p-card>
            </div>
        </Variant>

        <Variant title="Border & radius">
            <div>
                <p-leaf>
                    <p>
                        It overrides card border to follow button, badge etc. `radius` is better visible with dark mode.
                    </p>
                </p-leaf>
            </div>

            <div style="width: '20rem', padding : '10px', background : '#41403e'">
                <p-card
                    :dark="darkMode"
                    radius
                    :image="state.image"
                >
                    <div slot="title">My awesome Paper card!</div>
                    <div slot="subtitle">Nice looking subtitle.</div>
                    <div slot="text"> Notice that the card width in this example have been set to 20rem, otherwise it
                        will try to fill the current container/row where the card is. </div>
                    <p-button type="secondary">Next</p-button>
                </p-card>

            </div>
        </Variant>

        <template #controls>
            <HstCheckbox
                v-model="darkMode"
                title="Dark mode"
            />
            <HstCheckbox
                v-model="state.radius"
                title="Enable radius"
            />
            <HstText
                v-model="state.title"
                title="Card title"
            />
            <HstText
                v-model="state.footer"
                title="Card footer"
            />
            <HstText
                v-model="state.header"
                title="Card header"
            />
            <HstText
                v-model="state.header"
                title="Card subtitle"
            />
            <HstText
                v-model="state.text"
                title="Card content"
            />
            <HstText
                v-model="state.image"
                title="Card image url"
            />
        </template>
    </Story>
</template>

<script lang="ts" setup>
import { useDarkMode } from '@h/useDarkMode'
import { reactive } from 'vue'

const state = reactive({
    footer: 'Footer',
    header: 'Ciao !',
    title: 'My awesome Paper card !',
    subtitle: 'Nice looking subtitle.',
    text: 'Notice that the card width in this example have been set to 20rem, otherwise it will try to fill the current container/row where the card is. ',
    image: 'https://picsum.photos/200/100',
    radius: false,
})

const { darkMode } = useDarkMode()
</script>
