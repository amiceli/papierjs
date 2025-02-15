import type { PModal } from './modal'

export function previewModal() {
    const inputObserver = new MutationObserver(() => {
        const modal = document.querySelector('#modal-1') as unknown as PModal
        const buttonModal = document.querySelector('#open-modal-1')

        const otherModal = document.querySelector(
            '#modal-2',
        ) as unknown as PModal
        const otherButton = document.querySelector('#open-modal-2')
        const closeIt = document.querySelector('#close-it')

        if (modal && buttonModal && otherModal && otherButton) {
            buttonModal.addEventListener('click', () => {
                modal.open()
            })
            otherButton.addEventListener('click', () => {
                otherModal.open()
            })
            closeIt.addEventListener('click', () => {
                otherModal.close()
            })
            inputObserver.disconnect()
        }
    })

    inputObserver.observe(document.body, {
        childList: true,
        subtree: true,
    })
}
