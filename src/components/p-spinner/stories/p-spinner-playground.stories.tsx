import type { Meta, StoryObj } from '@storybook/web-components'
import type { PSpinner } from '../p-spinner'

const meta: Meta<PSpinner> = {
    title: 'Components/Spinner/Playground',
    argTypes: {
        large: {
            control: 'boolean',
        },
        color: {
            control: 'color',
        },
        dark: {
            control: 'boolean',
        },
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
        return `
            <div>
                <p-leaf>
                    <h3>p-spinner</h3>
                </p-leaf>
                <br />
                <div style="padding:10px; box-sizing: border-box; with:100%; background: ${props.dark ? '#41403e' : 'transparent'}">
                    <p-Spinner
                        ${props.large ? 'large' : ''}
                        ${props.dark ? 'dark' : ''}
                        color="${props.color}"
                    />
                </div>
            </div>
        `
    },
}
