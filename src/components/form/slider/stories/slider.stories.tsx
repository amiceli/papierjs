import { h } from '@stencil/core'
import type { Meta, StoryObj } from '@stencil/storybook-plugin'
import { Pleaf } from '../../../leaf/leaf'
import { PSlider } from '../sliders'

const meta: Meta<PSlider> = {
    title: 'Form/Slider/Playground',
    component: PSlider,
    subcomponents: [Pleaf],
    argTypes: {
        value: { controls: 'number' },
        min: { controls: 'number' },
        max: { controls: 'number' },
        block: { controls: 'boolean' },
        dark: { controls: 'number' },
    },
    args: {
        value: 10,
        min: 0,
        max: 100,
        block: false,
        dark: false,
    },
}

export default meta

type Story = StoryObj<PSlider>

export const Playground: Story = {
    render: (props) => {
        return (
            <div>
                <p-leaf>
                    <h3>p-icon</h3>
                </p-leaf>
                <br />
                <p-slider {...props} />
            </div>
        )
    },
}
