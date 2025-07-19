import type { Meta, StoryObj } from '@storybook/web-components'
import type { PAlert } from '../p-alert'

const meta = {
    title: 'Components/Alert/Playground',
    argTypes: {
        type: {
            control: {
                type: 'select',
            },
            options: [
                'primary',
                'secondary',
                'success',
                'warning',
                'danger',
            ],
        },
        closable: {
            control: {
                type: 'boolean',
            },
        },
        content: {
            control: 'text',
        },
    },
    args: {
        dark: false,
        closable: true,
        type: 'primary',
        content: 'alert content',
    },
} satisfies Meta<
    PAlert & {
        content: string
    }
>

export default meta

type Story = StoryObj<
    PAlert & {
        content: string
    }
>

export const Playground: Story = {
    render: (props) => {
        const content = `
            <p-alert
                type="${props.type}"
                ${props.dark === true ? 'dark' : ''}
                ${props.closable === true ? 'closable' : ''}
            >
                ${props.content} 
            </p-alert>
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
