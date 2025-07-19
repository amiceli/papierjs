import type { Meta, StoryObj } from '@storybook/web-components'
import type { PDropdown } from '../p-dropdown'

const meta = {
    title: 'Components/Dropdown/Playground',
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
} satisfies Meta<PDropdown>

export default meta

type Story = StoryObj<PDropdown>

export const Playground: Story = {
    render: (props) => {
        return `
            <div>
                <p-leaf>
                    <h3>p-dropdown</h3>
                </p-leaf>
                <br />
                <p-Dropdown
                    ${props.dark ? 'dark' : ''}
                    value="${props.value}"
                    ${props.open ? 'open' : ''}
                    placeholder="${props.placeholder}"
                >
                    <p-dropdown-item value="Vue js">Vue Js</p-dropdown-item>
                    <p-dropdown-item value="Nest">Nest</p-dropdown-item>
                    <p-dropdown-item value="Storybook">Storybook</p-dropdown-item>
                </p-Dropdown>
            </div>
        `
    },
}
