import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing'
import { icons } from '../icons'

describe('p-icon', () => {
    let page: E2EPage
    let element: E2EElement

    beforeEach(async () => {
        page = await newE2EPage()
        await page.setContent('<p-icon icon="user" color="red" size="100"></p-icon>')

        element = await page.find('p-icon')
    })

    it('renders', async () => {
        expect(element).toHaveClass('hydrated')
    })

    it('should include svg', async () => {
        const normalize = document.createElement('div')
        normalize.innerHTML = icons.user

        const div = element.shadowRoot.querySelector('div')
        expect(div.innerHTML).toContain(normalize.innerHTML)
    })

    it('should apply styles', () => {
        const div = element.shadowRoot.querySelector('div')

        expect(div.style.color).toEqual('red')
        expect(div.style.width).toEqual('100px')
    })
})
