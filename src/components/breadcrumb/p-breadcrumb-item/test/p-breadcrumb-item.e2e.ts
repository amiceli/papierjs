import { newE2EPage } from '@stencil/core/testing'
import { runDarkModeControllerTests } from '@/utils/test/dark-mode-controller-tests'

describe('p-breadcrumb-item', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-breadcrumb-item></p-breadcrumb-item>')

        const element = await page.find('p-breadcrumb-item')
        expect(element).toHaveClass('hydrated')
    })

    runDarkModeControllerTests('p-breadcrumb-item', '>>> .papier')
})
