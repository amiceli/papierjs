import { isDark } from 'histoire/client'
import { onMounted, onUnmounted, ref } from 'vue'

export function useSpecsDarkMode() {
    const dark = ref(isDark())

    let observer: MutationObserver

    onMounted(() => {
        observer = new MutationObserver(() => {
            dark.value = isDark()
        })
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: [
                'class',
            ],
        })
    })

    onUnmounted(() => {
        observer?.disconnect()
    })

    return {
        dark,
    }
}
