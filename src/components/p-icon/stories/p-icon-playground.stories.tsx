import type { Meta, StoryObj } from '@storybook/web-components'
import { icons } from '../icons'
import type { PIcon } from '../p-icon'

const meta: Meta<PIcon> = {
    title: 'Components/Icon/Playground',
    argTypes: {
        icon: {
            control: {
                type: 'select',
            },
            options: Object.keys(icons),
        },
    },
    args: {
        icon: 'user',
        size: 30,
        color: 'inherit',
    },
}

export default meta

type Story = StoryObj<PIcon>

export const Playground: Story = {
    render: (props) => {
        return `
            <div>
                <p-leaf>
                    <h3>p-icon</h3>
                </p-leaf>
                <br />
                <p-Icon
                    icon="${props.icon}"
                    size="${props.size}"
                    color="${props.color}"
                />
            </div>
        `
    },
}
