import { newE2EPage } from '@stencil/core/testing'

describe('p-slider', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-slider></p-slider>')

        const element = await page.find('p-slider')
        expect(element).toHaveClass('hydrated')
    })
    it('define input min and max', async () => {
        const page = await newE2EPage()
        await page.setContent(`
            <p-slider 
                min="10" 
                max="100" 
            ></p-slider>
        `)
        const input = await page.find('p-slider >>> input')

        expect(input.getAttribute('max')).toEqual('100')
        expect(input.getAttribute('min')).toEqual('10')
    })
})
