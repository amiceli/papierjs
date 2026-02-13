import { isDark, toggleDark } from 'histoire/client'
import { ref, watch } from 'vue'

export function useDarkMode() {
    const darkMode = ref<boolean>(isDark())

    watch(darkMode, () => {
        toggleDark()
    })

    return {
        darkMode,
    }
}
