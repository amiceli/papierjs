import type { Preview } from '@storybook/html'
import { defineCustomElements } from '../loader'
import { previewCloseAlert } from '../src/components/alert/stories/alert.preview'
import { handleDropdownOnChange } from '../src/components/dropdown/dropdown/dropdown.preview'
import { handleInputCahnge } from '../src/components/form/input-text/stories/input-text.preview'
import { previewSlider } from '../src/components/form/slider/sliders.preview'
import { previewModal } from '../src/components/modal/modal.preview'

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

handleDropdownOnChange()
previewCloseAlert()
handleInputCahnge()
previewSlider()
previewModal()

export default preview
