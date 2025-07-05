import { h } from '@stencil/core'
import { Pleaf } from '../../leaf/leaf'
import { PAlert } from '../alert'

const meta = {
    title: 'Components/Alert/Playground',
    component: PAlert,
    subcomponents: [Pleaf],
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'warning', 'danger'],
        },
        closable: {
            control: {
                type: 'boolean',
            },
        },
        content: {
            control: 'text',
        },
    },
    args: {
        dark: false,
        closable: true,
        type: 'primary',
        content: 'alert content',
    },
}

export default meta

export const Playground = {
    render: (props) => {
        const content = <p-alert {...props}>{props.content}</p-alert>

        return props.dark ? (
            <div
                style={{
                    padding: '10px',
                    boxSizing: 'border-box',
                    width: '100%',
                    background: '#41403e',
                }}
            >
                ${content}
            </div>
        ) : (
            content
        )
    },
}
