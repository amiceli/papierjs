export function previewCloseAlert() {
    const alertObserver = new MutationObserver(() => {
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
        childList: true,
        subtree: true,
    })
}
