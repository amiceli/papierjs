import { h } from '@stencil/core'
import type { Meta, StoryObj } from '@stencil/storybook-plugin'
import { Pleaf } from '../../../leaf/leaf'
import { PSwitchTile } from '../switch-tile'

const tileOptions = ['primary', 'danger', 'secondary', 'success', 'muted']

const meta: Meta<PSwitchTile> = {
    title: 'Form/Switch Tile/Playground',
    component: PSwitchTile,
    subcomponents: [Pleaf],
    argTypes: {
        dark: { control: 'boolean' },
        checked: { control: 'boolean' },
        checkedBackground: {
            control: { type: 'select' },
            options: tileOptions,
        },
        uncheckedBackground: {
            control: { type: 'select' },
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
        return (
            <div>
                <p-leaf>
                    <h3>p-icon</h3>
                </p-leaf>
                <br />
                <div
                    style={{
                        padding: '10px',
                        boxSizing: 'border-box',
                        width: '100%',
                        background: props.dark ? '#41403e' : 'transparent',
                    }}
                >
                    <p-switch-tile {...props}>
                        <span slot="unchecked-text">No</span>
                        <span slot="checked-text">Yes</span>
                    </p-switch-tile>
                </div>
            </div>
        )
    },
}

// import { PSwitchTile } from '../switch-tile'

// export default {
//     title: 'Form/Switch Tile/Playground',
//     component : PSwitchTile,
//     argTypes: {
//         uncheckedText: {
//             name: 'unchecked-text',
//             control: 'text',
//         },
//         checkedText: {
//             name: 'checked-text',
//             control: 'text',
//         },
//         uncheckedBackground: {
//             control: { type: 'select' },
//             options: ['primary', 'secondary', 'warning', 'danger', 'noted'],
//             name: 'unchecked-background',
//         },
//         checkedBackground: {
//             control: { type: 'select' },
//             options: ['primary', 'secondary', 'warning', 'danger', 'noted'],
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
//         <p-switch-tile
//             unchecked-background="${args.uncheckedBackground}"
//             checked-background="${args.checkedBackground}"
//             ${args.darkMode ? 'dark' : ''}
//         >
//             <span slot="unchecked-text">${args.uncheckedText}</span>
//             <span slot="checked-text">${args.checkedText}</span>
//         </p-switch-tile>`

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
//     uncheckedText: 'No',
//     checkedText: 'Yes',
//     uncheckedBackground: 'primary',
//     checkedBackground: 'noted',
//     darkMode: false,
// }
