import type { Preview } from '@storybook/html'
import { defineCustomElements } from '../loader'
import { previewCloseAlert } from '../src/components/alert/stories/alert.preview'
import { handleInputCahnge } from '../src/components/input/input-text/stories/input-text.preview'
import { previewModal } from '../src/components/p-modal/p-modal.preview'

defineCustomElements()

function handleDropdownOnChange() {
    const dropdownObserver = new MutationObserver((mutationsList, observer) => {
        const onChange = document.querySelector('#on-change-dropdown')
        const dropdownItem = Array.from(
            document.querySelectorAll('p-dropdown-item'),
        )

        if (onChange && dropdownItem.length > 0) {
            // @ts-ignore
            onChange.addEventListener('select', (e: CustomEvent) => {
                window.alert(e.detail)
            })
            for (const item of dropdownItem) {
                item.addEventListener('change', () => {
                    for (const sub of dropdownItem) {
                        sub.removeAttribute('selected')
                    }
                    item.setAttribute('selected', 'true')
                })
            }
            dropdownObserver.disconnect()
        }
    })

    dropdownObserver.observe(document.body, {
        childList: true, // Observer les ajouts/enlèvements d'enfants
        subtree: true, // Observer tout le sous-arbre DOM
    })
}

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

previewModal()

export default preview
