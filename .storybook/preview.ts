import type { Preview } from '@storybook/html'
import { defineCustomElements } from '../loader'

defineCustomElements()

const observer = new MutationObserver((mutationsList, observer) => {
    const alert = document.querySelector('#onClose')
    const videoGame = document.querySelector('#video-game')
    if (alert) {
        alert.addEventListener('close', () => {
            alert.removeAttribute('closable')
            alert.textContent = 'Closed !'
        })

        observer.disconnect()
    }
    if (videoGame) {
        // @ts-ignore
        videoGame.addEventListener('change', (e: CustomEvent) => {
            const span = document.querySelector('#video-game-answer')

            if (span) {
                span.textContent = e.detail
            }
        })
        observer.disconnect()
    }
})

// Observer le DOM pour les ajouts d'enfants (configurable selon ton besoin)
observer.observe(document.body, {
    childList: true, // Observer les ajouts/enlèvements d'enfants
    subtree: true, // Observer tout le sous-arbre DOM
})

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

export default preview
