import type { Meta, StoryObj } from '@storybook/web-components'
import type { PSwitchTile } from '../switch-tile'

const tileOptions = [
    'primary',
    'danger',
    'secondary',
    'success',
    'muted',
]

const meta: Meta<PSwitchTile> = {
    title: 'Form/Switch Tile/Playground',
    argTypes: {
        dark: {
            control: 'boolean',
        },
        checked: {
            control: 'boolean',
        },
        checkedBackground: {
            control: {
                type: 'select',
            },
            options: tileOptions,
        },
        uncheckedBackground: {
            control: {
                type: 'select',
            },
            options: tileOptions,
        },
    },
    args: {
        dark: false,
        checked: false,
        checkedBackground: 'secondary',
        uncheckedBackground: 'muted',
    },
}

export default meta

type Story = StoryObj<PSwitchTile>

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
                    <p-switch-tile 
                        ${props.dark ? 'dark' : ''}
                        ${props.checked ? 'checked' : ''}
                        checkedBackground="${props.checkedBackground}"
                        uncheckedBackground="${props.uncheckedBackground}"
                    >
                        <span slot="unchecked-text">No</span>
                        <span slot="checked-text">Yes</span>
                    </p-switch-tile>
                </div>
            </div>
        `
    },
}
