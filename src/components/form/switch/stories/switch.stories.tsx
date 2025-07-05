import { h } from '@stencil/core'
import type { Meta, StoryObj } from '@stencil/storybook-plugin'
import { Pleaf } from '../../../leaf/leaf'
import { PSwitch } from '../switch'

const meta: Meta<PSwitch> = {
    title: 'Form/Switch/Playground',
    component: PSwitch,
    subcomponents: [Pleaf],
    argTypes: {
        round: { control: 'boolean' },
        square: { control: 'boolean' },
        dark: { control: 'boolean' },
        checked: { control: 'boolean' },
    },
    args: {
        round: false,
        square: true,
        dark: false,
        checked: false,
    },
}

export default meta

type Story = StoryObj<PSwitch>

export const Playground: Story = {
    render: (props) => {
        return (
            <div>
                <p-leaf>
                    <h3>p-switch</h3>
                </p-leaf>
                <br />
                <div
                    style={{
                        padding: '10px',
                        boxSizing: 'border-box',
                        width: '100%',
                        background: props.dark ? '#41403e' : 'transparent',
                    }}
                >
                    <p-switch {...props} />
                </div>
            </div>
        )
    },
}
