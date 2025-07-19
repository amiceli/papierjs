import type { Meta, StoryObj } from '@storybook/web-components'
import type { PProgressBar } from '../p-progress-bar'

const meta = {
    title: 'Components/Progress bar/Playground',
    argTypes: {
        type: {
            control: {
                type: 'select',
            },
            options: [
                'secondary',
                'success',
                'warning',
                'danger',
                'muted',
                'primary',
            ],
        },

        value: {
            control: 'number',
        },
        striped: {
            control: 'boolean',
        },
        dark: {
            control: 'boolean',
        },
        auto: {
            control: 'number',
        },
    },
    args: {
        type: 'secondary',
        value: 10,
        striped: false,
        dark: false,
        auto: null,
    },
} satisfies Meta<PProgressBar>

export default meta

type Story = StoryObj<PProgressBar>

export const Playground: Story = {
    render: (props) => {
        const content = `
            <p-progress-bar
                type=${props.type}
                value=${props.value}
                ${props.striped ? 'striped' : ''}
                ${props.auto ? 'auto' : ''}
                ${props.dark ? 'dark' : ''}
            >
                ${props.value}
            </p-progress-bar>
        `

        if (props.dark) {
            return `
                <p-leaf>
                    <h3>p-progress-bar</h3>
                </p-leaf>
                <div style="padding: 10px; boxSizing: border-box; width: 100%; background: #41403e">
                    ${content}
                </div>
            `
        }

        return `
            <p-leaf>
                <h3>p-progress-bar</h3>
            </p-leaf>
            ${content}
        `
    },
}
