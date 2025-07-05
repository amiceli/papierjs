import { h } from '@stencil/core'
import type { Meta, StoryObj } from '@stencil/storybook-plugin'
import { Pleaf } from '../../leaf/leaf'
import { PProgressBar } from '../progress-bar'

const meta: Meta<PProgressBar> = {
    title: 'Components/Progress bar/Playground',
    component: PProgressBar,
    subcomponents: [Pleaf],
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['secondary', 'success', 'warning', 'danger', 'muted', 'primary'],
        },

        value: { control: 'number' },
        striped: { control: 'boolean' },
        dark: { control: 'boolean' },
        auto: { control: 'number' },
    },
    args: {
        type: 'secondary',
        value: 10,
        striped: false,
        dark: false,
        auto: null,
    },
}

export default meta

type Story = StoryObj<PProgressBar>

export const Playground: Story = {
    render: (props) => {
        return (
            <div>
                <p-leaf>
                    <h3>p-progress-bar</h3>
                </p-leaf>
                <br />
                <p-progress-bar {...props}>{props.value}</p-progress-bar>
            </div>
        )
    },
}
