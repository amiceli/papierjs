import { newE2EPage } from '@stencil/core/testing'
import { runDarkModeControllerTests } from '@/utils/test/dark-mode-controller-tests'

describe('p-input-text', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-input-text></p-input-text>')

        const element = await page.find('p-input-text')
        expect(element).toHaveClass('hydrated')
    })

    runDarkModeControllerTests('p-input-text', '>>> .papier')
})
