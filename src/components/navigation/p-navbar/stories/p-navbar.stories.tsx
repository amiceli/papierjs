import type { Meta, StoryObj } from '@storybook/web-components'
import type { PNavbar } from '../p-navbar'

const meta = {
    title: 'Navigation/Navbar/Playground',
    argTypes: {
        fixed: {
            control: 'boolean',
        },
        split: {
            control: 'boolean',
        },
        dark: {
            control: 'boolean',
        },
    },
    args: {
        dark: false,
        split: true,
        fixed: false,
    },
} satisfies Meta<PNavbar>

export default meta

type Story = StoryObj<PNavbar>

export const Playground: Story = {
    render: (props) => {
        const content = `
            <p-navbar
                style="
                    width : 90%;
                    display : block;
                    margin : auto;
                "
                ${props.split ? 'split' : ''}
                ${props.dark ? 'dark' : ''}
                ${props.fixed ? 'fixed' : ''}
                root-title="Get PapierJS"
                root-link="/"
            >
                <p-navbar-item
                    href="/"
                    target="_blank"
                >
                    Home
                </p-navbar-item>
                <p-navbar-item
                    href="/"
                    target="_blank"
                    icon="github"
                >
                    Github
                </p-navbar-item>
            </p-button>
        `

        if (props.dark) {
            return `
                <div style="padding: 10px; boxSizing: border-box; width: 100%; background: #41403e">
                    ${content}
                </div>
            `
        }

        return `${content}`
    },
}
