import type { Preview } from '@storybook/html'
import { defineCustomElements } from '../loader'
import { previewModal } from '../src/components/p-modal/p-modal.preview'

defineCustomElements()

function handleInputCahnge() {
    const inputObserver = new MutationObserver((mutationsList, observer) => {
        const videoGame = document.querySelector('#video-game')

        if (videoGame) {
            // @ts-ignore
            videoGame.addEventListener('change', (e: CustomEvent) => {
                const span = document.querySelector('#video-game-answer')
                if (span) {
                    span.textContent = e.detail
                }
            })
            inputObserver.disconnect()
        }
    })

    inputObserver.observe(document.body, {
        childList: true, // Observer les ajouts/enlèvements d'enfants
        subtree: true, // Observer tout le sous-arbre DOM
    })
}

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

function handleAlertClose() {
    const alertObserver = new MutationObserver((mutationsList, observer) => {
        const alert = document.querySelector('#onClose')

        if (alert) {
            alert.addEventListener('close', () => {
                alert.removeAttribute('closable')
                alert.textContent = 'Closed !'
            })

            alertObserver.disconnect()
        }
    })

    alertObserver.observe(document.body, {
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
handleAlertClose()
handleInputCahnge()

previewModal()

export default preview
