import type { Meta, StoryObj } from '@storybook/web-components'
import type { PBadge } from '../p-badge'

type BadgeMetaType = PBadge & {
    content: string
    fontSize: number
}

const meta = {
    title: 'Components/Badge/Playground',
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
            ],
        },
        dark: {
            control: 'boolean',
        },
        content: {
            control: 'text',
        },
        fontSize: {
            control: 'number',
        },
    },
    args: {
        type: 'secondary',
        dark: false,
        content: 'badge',
        fontSize: 20,
    },
} satisfies Meta<BadgeMetaType>

export default meta

type Story = StoryObj<BadgeMetaType>

export const Playground: Story = {
    render: (props) => {
        const content = `
            <div style="font-size: ${props.fontSize}px">
                <p-badge
                    type="${props.type}"
                    ${props.dark === true ? 'dark' : ''}
                >
                    ${props.content} 
                </p-badge>
            </div>
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
