import { newE2EPage } from '@stencil/core/testing'

describe('p-sliders', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-sliders></p-sliders>')

        const element = await page.find('p-sliders')
        expect(element).toHaveClass('hydrated')
    })
    it('define input min and max', async () => {
        const page = await newE2EPage()
        await page.setContent(`
            <p-sliders 
                min="10" 
                max="100" 
            ></p-sliders>
        `)
        const input = await page.find('p-sliders >>> input')

        expect(input.getAttribute('max')).toEqual('100')
        expect(input.getAttribute('min')).toEqual('10')
    })
})
