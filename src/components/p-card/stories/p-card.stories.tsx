import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import type { PCard } from '../p-card'

const meta: Meta<PCard> = {
    title: 'Components/Card/Playground',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        dark: { control: 'boolean' },
        image: {
            description: 'image',
        },
    },
    args: {
        dark: false,
        image: 'https://picsum.photos/200/100',
    },
} satisfies Meta<PCard>

export default meta

type Story = StoryObj<PCard>

export const Playground: Story = {
    args: {
        dark: true,
    },
    render: (props) => {
        return html`
        <div>
            <p-leaf>
                <h3>p-card</h3>
            </p-leaf>
            <div style={{ width: '20rem' }}>
                <p-card
                    image=${props.image}
                    ${props.dark ? 'dark' : ''}
                >
                    <div slot="title">My awesome Paper card!</div>
                    <div slot="subtitle">Nice looking subtitle.</div>
                    <div slot="text">
                        Notice that the card width in this example have been set to 20rem, otherwise it will try to fill the current
                        container/row where the card is.
                    </div>
                    <p-button type="secondary">Next</p-button>
                </p-card>
            </div>
            <p-leaf>
                <h3>p-card with footer and header</h3>
            </p-leaf>
            <div style={{ width: '20rem' }}>
                <p-card {...props}>
                    <div slot="header">Header</div>
                    <div slot="title">My awesome Paper card!</div>
                    <div slot="subtitle">Nice looking subtitle.</div>
                    <div slot="text">
                        Notice that the card width in this example have been set to 20rem, otherwise it will try to fill the current
                        container/row where the card is.
                    </div>
                    <p-button type="secondary">Next</p-button>
                    <div slot="footer">Footer</div>
                </p-card>
            </div>
        </div>
        `
    },
}
