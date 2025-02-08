import type { Preview } from '@storybook/html'
import { defineCustomElements } from '../loader'

defineCustomElements()

const observer = new MutationObserver((mutationsList, observer) => {
    const element = document.querySelector('#onClose') // Remplace par ton sélecteur
    if (element) {
        element.addEventListener('close', () => {
            element.removeAttribute('closable')
            element.textContent = 'Closed !'
        })

        observer.disconnect() // Arrêter l'observateur une fois que l'élément est trouvé
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
