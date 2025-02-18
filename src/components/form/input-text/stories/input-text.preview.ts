export function handleInputCahnge() {
    const inputObserver = new MutationObserver(() => {
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
        childList: true,
        subtree: true,
    })
}
