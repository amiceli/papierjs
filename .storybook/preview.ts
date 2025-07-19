import { defineCustomElements } from '../loader'
import { previewSlider } from '../src/components/form/p-slider/sliders.preview'
import { previewModal } from '../src/components/p-modal/stories/modal.preview'
import { previewProgressbar } from '../src/components/p-progress-bar/stories/progress-bar.preview'

defineCustomElements()

const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
}

previewSlider()
previewModal()
previewProgressbar()

export default preview
