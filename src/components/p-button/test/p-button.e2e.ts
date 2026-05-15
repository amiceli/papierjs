import { newE2EPage } from '@stencil/core/testing'
import { runDarkModeControllerTests } from '@/utils/test/dark-mode-controller-tests'

describe('p-button', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-button></p-button>')

        const element = await page.find('p-button')
        expect(element).toHaveClass('hydrated')
    })

    runDarkModeControllerTests('p-button', '>>> .papier')
})
