import type { Preview } from '@storybook/html'
import { defineCustomElements } from '../loader'
import { previewCloseAlert } from '../src/components/alert/stories/alert.preview'
import { handleDropdownOnChange } from '../src/components/dropdown/dropdown.preview'
import { handleInputCahnge } from '../src/components/input/input-text/stories/input-text.preview'
import { previewModal } from '../src/components/modal/modal.preview'
import { previewSlider } from '../src/components/p-sliders/p-sliders.preview'

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
