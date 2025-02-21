import type { Preview } from '@storybook/html'
import { defineCustomElements } from '../loader'
import { handleInputCahnge } from '../src/components/form/input-text/stories/input-text.preview'
import { previewSlider } from '../src/components/form/slider/sliders.preview'
import { previewModal } from '../src/components/modal/modal.preview'
import { previewProgressbar } from '../src/components/progress-bar/stories/progress-bar.preview'

defineCustomElements()

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
}

handleInputCahnge()
previewSlider()
previewModal()
previewProgressbar()

export default preview
