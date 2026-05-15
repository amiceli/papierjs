import { newE2EPage } from '@stencil/core/testing'
import { runDarkModeControllerTests } from '@/utils/test/dark-mode-controller-tests'

describe('p-badge', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-badge></p-badge>')

        const element = await page.find('p-badge')
        expect(element).toHaveClass('hydrated')
    })

    runDarkModeControllerTests('p-badge', '>>> .papier')
})
