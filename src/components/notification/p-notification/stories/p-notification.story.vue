<template>
    <Story
        :layout="{ type: 'grid', width: '90%' }"
        title="Components/Notification/Overview"
    >
        <Variant title="Installation">
            <p-notification-handler ref="handler"></p-notification-handler>
            <div>
                <p-leaf>
                    Add <b>p-notification-handler</b> in the DOM :
                </p-leaf>
            </div>
            <MarkdownRender
                content="`
                <p-notification-handler></p-notification-handler>
                `"
                :isDark="darkMode"
            />
            <div>
                <p-leaf>
                    <p>
                        Next you have to call <b>pushNotification</b> function :
                    </p>
                </p-leaf>
            </div>
            <MarkdownRender
                :content="code"
                :isDark="darkMode"
            />
        </Variant>
        <Variant title="Samples">
            <p-button
                type="secondary"
                :dark="darkMode"
                @click="pushNotification()"
            >
                Push notification
            </p-button>
        </Variant>

        <template #controls>
            <HstCheckbox
                v-model="darkMode"
                title="Dark mode"
            />
            <HstSelect
                v-model="state.type"
                title="Notification type"
                :options="types"
            />
            <HstText
                v-model="state.text"
                title="Notification text"
            />
            <HstCheckbox
                v-model="state.canclose"
                title="Closable"
            />
            <HstNumber
                v-model="state.timeout"
                :step="1"
                title="Timeout before close"
            />
        </template>
    </Story>
</template>

<script lang="ts" setup>
import { useDarkMode } from '@h/useDarkMode'
import MarkdownRender from 'markstream-vue'
import { reactive, useTemplateRef } from 'vue'
import 'markstream-vue/index.css'

const handler = useTemplateRef('handler')
const { darkMode } = useDarkMode()
const state = reactive({
    type: 'info',
    text: 'Awesome notification',
    canclose: false,
    timeout: null,
})

const types = [
    'info',
    'primary',
    'warning',
    'danger',
    'success',
]

function pushNotification() {
    handler.value?.pushNotification({
        type: state.type,
        text: state.text,
        timeout: state.timeout,
        canclose: state.canclose,
    })
}

const code = `
~~~js
const handler = this.el.querySelector('p-notification-handler')

if (handler) {
    handler.pushNotification({
        type: "primary",
        canclose: false,
        text: "Example notification",
        timeout: 1000,
    })
}
~~~
`
</script>
