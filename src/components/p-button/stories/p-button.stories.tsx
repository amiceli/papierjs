import type { Meta, StoryObj } from '@storybook/web-components'
import type { PButton } from '../p-button'

const meta = {
    title: 'Components/Buttons/Playground',
    argTypes: {
        type: {
            control: 'select',
            options: [
                'success',
                'secondary',
                'primary',
                'danger',
                'warning',
            ],
        },
        outline: {
            control: 'boolean',
        },
        large: {
            control: 'boolean',
        },
        small: {
            control: 'boolean',
        },
        block: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        dark: {
            control: 'boolean',
        },
        loading: {
            control: 'boolean',
        },
    },
    args: {
        type: 'primary',
        outline: false,
        large: false,
        small: false,
        block: false,
        disabled: false,
        dark: false,
        loading: false,
    },
} satisfies Meta<PButton>

export default meta

type Story = StoryObj<PButton>

export const Playground: Story = {
    render: (props) => {
        const content = `
            <p-button
                type=${props.type}
                ${props.outline ? 'outline' : ''}
                ${props.large ? 'large' : ''}
                ${props.small ? 'small' : ''}
                ${props.block ? 'block' : ''}
                ${props.disabled ? 'disabled' : ''}
                ${props.dark ? 'dark' : ''}
                ${props.loading ? 'loading' : ''}
            >click here !</p-button>
        `

        if (props.dark) {
            return `
                <div style="padding: 10px; boxSizing: border-box; width: 100%; background: #41403e">
                    ${content}
                </div>
            `
        }

        return `${content}`
    },
}
