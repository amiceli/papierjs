import { h } from '@stencil/core'
import type { Meta, StoryObj } from '@stencil/storybook-plugin'
import { Pleaf } from '../../../leaf/leaf'
import { PDropdownItem } from '../../dropdown-item/dropdown-item'
import { PDropdown } from '../dropdown'

const meta: Meta<PDropdown> = {
    title: 'Components/Dropdown/Playground',
    component: PDropdown,
    subcomponents: [Pleaf, PDropdownItem],
    argTypes: {
        dark: { control: 'boolean' },
        value: { control: 'text' },
        open: { control: 'boolean' },
        placeholder: { control: 'text' },
    },
    args: {
        dark: false,
        value: null,
        placeholder: 'What do you want ?',
        open: false,
    },
}

export default meta

type Story = StoryObj<PDropdown>

export const Playground: Story = {
    render: (props) => (
        <div>
            <p-leaf>
                <h3>p-dropdown</h3>
            </p-leaf>
            <br />
            <p-dropdown {...props}>
                <p-dropdown-item value="Vue js">Vue Js</p-dropdown-item>
                <p-dropdown-item value="Nest">Nest</p-dropdown-item>
                <p-dropdown-item value="Storybook">Storybook</p-dropdown-item>
            </p-dropdown>
        </div>
    ),
}
