import { h } from '@stencil/core'
import type { Meta, StoryObj } from '@stencil/storybook-plugin'
import { Pleaf } from '../../leaf/leaf'
import { PSpinner } from '../p-spinner'

const meta: Meta<PSpinner> = {
    title: 'Components/Spinner/Playground',
    component: PSpinner,
    subcomponents: [Pleaf],
    argTypes: {
        large: { control: 'boolean' },
        color: { control: 'color' },
        dark: { control: 'boolean' },
    },
    args: {
        large: false,
        dark: false,
        color: '#b23ed5',
    },
}

export default meta

type Story = StoryObj<PSpinner>

export const Playground: Story = {
    render: (props) => {
        return (
            <div>
                <p-leaf>
                    <h3>p-spinner</h3>
                </p-leaf>
                <br />
                <div
                    style={{
                        padding: '10px',
                        background: props.dark ? '#41403e' : 'white',
                    }}
                >
                    <p-spinner {...props} />
                </div>
            </div>
        )
    },
}
