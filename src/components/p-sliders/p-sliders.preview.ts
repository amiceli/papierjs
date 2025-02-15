export function previewSlider() {
    const alertObserver = new MutationObserver(() => {
        const slider = document.querySelector('#for-slider')
        const sliderSpan = document.querySelector('#for-slider-label')

        if (slider && sliderSpan) {
            slider.addEventListener('change', (e: CustomEvent) => {
                sliderSpan.textContent = e.detail
            })

            alertObserver.disconnect()
        }
    })

    alertObserver.observe(document.body, {
        childList: true,
        subtree: true,
    })
}
