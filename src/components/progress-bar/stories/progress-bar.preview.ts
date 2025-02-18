export function previewProgressbar() {
    const inputObserver = new MutationObserver(() => {
        const progress = document.querySelector('#animated-progress')
        const progressBtn = document.querySelector('#animated-progress-button')
        let value = 10

        if (progress && progressBtn) {
            progress.setAttribute('value', `${value}`)
            progressBtn.addEventListener('click', () => {
                if (value === 100) {
                    value = -10
                }

                value += 10
                progress.setAttribute('value', `${value}`)
            })
            inputObserver.disconnect()
        }
    })

    inputObserver.observe(document.body, {
        childList: true,
        subtree: true,
    })
}
