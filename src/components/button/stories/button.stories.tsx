import { h } from '@stencil/core'
import type { Meta, StoryObj } from '@stencil/storybook-plugin'
import { Pleaf } from '../../leaf/leaf'
import { PButton } from '../button'

const meta: Meta<PButton> = {
    title: 'Components/Buttons/Playground',
    component: PButton,
    subcomponents: [Pleaf],
    argTypes: {
        type: {
            control: 'select',
            options: ['success', 'secondary', 'primary', 'danger', 'warning'],
        },
        outline: { control: 'boolean' },
        large: { control: 'boolean' },
        small: { control: 'boolean' },
        block: { control: 'boolean' },
        disabled: { control: 'boolean' },
        dark: { control: 'boolean' },
        loading: { control: 'boolean' },
    },
    args: {
        type: 'primary',
        outline: false,
        large: false,
        small: false,
        block: false,
        disabled: false,
        dark: false,
        loading: false,
    },
}

export default meta

type Story = StoryObj<PButton>

export const Playground: Story = {
    render: (props) => (
        <div>
            <p-leaf>
                <h3>p-button</h3>
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
                    <p-button {...props}>click here !</p-button>
                </div>
            ) : (
                <p-button {...props}>click here !</p-button>
            )}
        </div>
    ),
}

// export default {
//     title: 'Components/Buttons/Playground',
//     argTypes: {
//         type: {
//             control: { type: 'select' },
//             options: ['success', 'secondary', 'warning', 'danger'],
//             name: 'checked-background',
//         },
//         darkMode: {
//             name: 'dark mode',
//             control: 'boolean',
//         },
//     },
// }

// const Template = (args) => {
//     const content = `
//         <div style="width: 400px">
//             <p-button
//                 type="${args.type}"
//                 ${args.darkMode ? 'dark' : ''}
//                 ${args.outline ? 'outline' : ''}
//                 ${args.small ? 'small' : ''}
//                 ${args.large ? 'large' : ''}
//                 ${args.block ? 'block' : ''}
//                 ${args.disabled ? 'disabled' : ''}
//             >
//                 ${args.contenr}
//             </p-button>
//         </div>
//     `

//     return args.darkMode
//         ? `
//         <div style="padding: 10px; box-sizing: border-box; width: 100%; background: #41403e">
//             ${content}
//         </div>
//     `
//         : content
// }

// export const Playground = Template.bind({})

// Playground.args = {
//     contenr: 'Awesome button',
//     type: 'success',
//     darkMode: false,
//     outline: false,
//     large: false,
//     small: false,
//     block: false,
//     disabled: false,
// }
