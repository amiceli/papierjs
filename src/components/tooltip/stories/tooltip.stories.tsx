import { h } from '@stencil/core'
import type { Meta, StoryObj } from '@stencil/storybook-plugin'
import { PButton } from '../../button/button'
import { Pleaf } from '../../leaf/leaf'
import { PTooltip } from '../tooltip'

const meta: Meta<PTooltip> = {
    title: 'Components/Tooltip/Playground',
    component: PTooltip,
    subcomponents: [Pleaf, PButton],
    argTypes: {
        title: { control: 'text' },
        disabled: { control: 'boolean' },
        left: { control: 'boolean' },
        right: { control: 'boolean' },
        bottom: { control: 'boolean' },
        top: { control: 'boolean' },
    },
    args: {
        title: 'nice tooltip',
        disabled: false,
        left: false,
        right: false,
        top: false,
        bottom: true,
    },
}

export default meta

type Story = StoryObj<PTooltip>

export const Playground: Story = {
    render: (props) => {
        return (
            <div>
                <p-leaf>
                    <h3>p-tooltip</h3>
                </p-leaf>
                <br />
                <p-tooltip {...props}>
                    <p-button type="secondary">Hover me</p-button>
                </p-tooltip>
            </div>
        )
    },
}

// export default {
//     title: 'Components/Tooltip/Playground',
// }

// const Template = (args) => {
//     return `
//         <div style="width: 400px">
//             <p-tooltip
//                 ${args.disabled ? 'disabled' : ''}
//                 ${args.top ? 'top' : ''}
//                 ${args.right ? 'right' : ''}
//                 ${args.left ? 'left' : ''}
//                 ${args.bottom ? 'bottom' : ''}
//                 title="${args.title}"
//             >
//                 <p-button>Click here ;)</p-button>
//             </p-tooltip>
//         </div>
//     `
// }

// export const Playground = Template.bind({})

// Playground.args = {
//     title: 'Awesome',
//     left: false,
//     right: true,
//     bottom: false,
//     top: false,
//     disabled: false,
// }
