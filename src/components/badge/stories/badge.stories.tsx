import { h } from '@stencil/core'
import type { Meta, StoryObj } from '@stencil/storybook-plugin'
import { Pleaf } from '../../leaf/leaf'
import { PBadge } from '../badge'

const meta: Meta<PBadge> = {
    title: 'Components/Badge/Playground',
    component: PBadge,
    subcomponents: [Pleaf],
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['secondary', 'success', 'warning', 'danger'],
        },
        dark: {
            control: 'boolean',
        },
    },
    args: {
        type: 'secondary',
        dark: false,
    },
}

export default meta

type Story = StoryObj<PBadge>

export const Playground: Story = {
    render: (props) => {
        return (
            <div>
                <p-leaf>
                    <h3>p-badge</h3>
                </p-leaf>
                <br />
                {props.dark ? (
                    <div
                        style={{
                            padding: '10px',
                            boxSizing: 'border-box',
                            width: '100%',
                            background: '#41403e',
                        }}
                    >
                        <p-badge {...props}>badge</p-badge>
                    </div>
                ) : (
                    <p-badge {...props}>badge</p-badge>
                )}
            </div>
        )
    },
}
