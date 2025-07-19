import type { Meta, StoryObj } from '@storybook/web-components'
import type { PTooltip } from '../p-tooltip'

const meta = {
    title: 'Components/Tooltip/Playground',
    argTypes: {
        title: {
            control: 'text',
        },
        disabled: {
            control: 'boolean',
        },
        left: {
            control: 'boolean',
        },
        right: {
            control: 'boolean',
        },
        bottom: {
            control: 'boolean',
        },
        top: {
            control: 'boolean',
        },
    },
    args: {
        title: 'nice tooltip',
        disabled: false,
        left: false,
        right: false,
        top: false,
        bottom: true,
    },
} satisfies Meta<PTooltip>

export default meta

type Story = StoryObj<PTooltip>

export const Playground: Story = {
    render: (props) => {
        return `
            <p-leaf>
                <h3>p-tooltip</h3>
            </p-leaf>
            <br />
            <p-Tooltip
                title=${props.title}
                ${props.disabled ? 'disabled' : ''}
                ${props.left ? 'left' : ''}
                ${props.right ? 'right' : ''}
                ${props.bottom ? 'bottom' : ''}
                ${props.top ? 'top' : ''}
            >
                <p-button type="secondary">Hover me</p-button>
            </p-Tooltip>
        `
    },
}
