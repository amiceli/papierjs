import { newE2EPage } from '@stencil/core/testing'
import { runDarkModeControllerTests } from '@/utils/test/dark-mode-controller-tests'

describe('p-progress-bar', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-progress-bar></p-progress-bar>')

        const element = await page.find('p-progress-bar')
        expect(element).toHaveClass('hydrated')
    })

    runDarkModeControllerTests('p-progress-bar', '>>> .papier')
})
