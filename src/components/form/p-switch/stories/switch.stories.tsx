import type { Meta, StoryObj } from '@storybook/web-components'
import type { PSwitch } from '../switch'

const meta: Meta<PSwitch> = {
    title: 'Form/Switch/Playground',
    argTypes: {
        round: {
            control: 'boolean',
        },
        square: {
            control: 'boolean',
        },
        dark: {
            control: 'boolean',
        },
        checked: {
            control: 'boolean',
        },
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
        return `
            <div>
                <p-leaf>
                    <h3>p-switch</h3>
                </p-leaf>
                <br />
                <div
                    style="padding:10px; box-sizing: border-box; with:100%; background: ${props.dark ? '#41403e' : 'transparent'}"
                >
                    <p-switch
                        ${props.round ? 'round' : ''}
                        ${props.square ? 'square' : ''}
                        ${props.dark ? 'dark' : ''}
                        ${props.checked ? 'checked' : ''}
                    />
                </div>
            </div>
        `
    },
}
