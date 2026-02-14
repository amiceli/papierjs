import { defineSetupVue3 } from '@histoire/plugin-vue'
import HistoireSeutp from './HistoireSetup.vue'

export const setupVue3 = defineSetupVue3(({ addWrapper }) => {
    addWrapper(HistoireSeutp)
})
