import { h } from '@stencil/core'
import type { Meta, StoryObj } from '@stencil/storybook-plugin'
import { Pleaf } from '../../leaf/leaf'
import { icons } from '../icons'
import { PIcon } from '../p-icon'

const meta: Meta<PIcon> = {
    title: 'Components/Icon/Playground',
    component: PIcon,
    subcomponents: [
        Pleaf,
    ],
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
        return (
            <div>
                <p-leaf>
                    <h3>p-icon</h3>
                </p-leaf>
                <br />
                <p-icon {...props} />
            </div>
        )
    },
}
