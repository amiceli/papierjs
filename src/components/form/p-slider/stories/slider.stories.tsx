import type { Meta, StoryObj } from '@storybook/web-components'
import type { PSlider } from '../sliders'

const meta: Meta<PSlider> = {
    title: 'Form/Slider/Playground',
    argTypes: {
        value: {
            controls: 'number',
        },
        min: {
            controls: 'number',
        },
        max: {
            controls: 'number',
        },
        block: {
            controls: 'boolean',
        },
        dark: {
            controls: 'number',
        },
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
        return `
            <p-leaf>
                <h3>p-icon</h3>
            </p-leaf>
            <br />
            <p-Slider
                value="${props.value}"
                min="${props.min}"
                max="${props.max}"
                ${props.dark ? 'dark' : ''}
                ${props.block ? 'block' : ''}
            />
        `
    },
}
