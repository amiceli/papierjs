import { defineSetupVue3 } from '@histoire/plugin-vue'
import HistoireSetup from './HistoireSetup.vue'

export const setupVue3 = defineSetupVue3(({ addWrapper }) => {
    addWrapper(HistoireSetup)
})
