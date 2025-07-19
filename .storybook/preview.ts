import { defineCustomElements } from '../loader'
import { previewSlider } from '../src/components/form/slider/sliders.preview'
import { previewModal } from '../src/components/p-modal/stories/modal.preview'
import { previewProgressbar } from '../src/components/progress-bar/stories/progress-bar.preview'

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
