export function handleDropdownOnChange() {
    const dropdownObserver = new MutationObserver(() => {
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
        childList: true,
        subtree: true,
    })
}
