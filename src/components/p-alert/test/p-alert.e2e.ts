import { newE2EPage } from '@stencil/core/testing'
import { runDarkModeControllerTests } from '@/utils/test/dark-mode-controller-tests'

describe('p-alert', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-alert></p-alert>')

        const element = await page.find('p-alert')
        expect(element).toHaveClass('hydrated')
    })

    runDarkModeControllerTests('p-alert', '>>> .papier')
})
