export function previewModal() {
    const alertObserver = new MutationObserver(() => {
        const modal = document.querySelector('#open-modal')
        const modalButton = document.querySelector('#open-modal-button')

        if (modal && modalButton) {
            modalButton.addEventListener('click', () => {
                modal.open()
            })

            alertObserver.disconnect()
        }
    })

    alertObserver.observe(document.body, {
        childList: true,
        subtree: true,
    })
}
