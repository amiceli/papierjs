import { Source } from '@storybook/blocks'
import { icons } from '../icons'

export default {
    title: 'Components/Icon/Playground',
    argTypes: {
        icon: {
            control: { type: 'select' },
            options: Object.keys(icons),
        },
    },
}

const Template = (args) => {
    return `
        <p-leaf>
            <h3>p-icon</h3>
        </p-leaf>
        <br />
        <p-icon 
            icon="${args.icon}"
            size="${args.size}"
            color="${args.color}"
        ></p-icon>
    `
}

export const Playground = Template.bind({})

Playground.args = {
    color: 'black',
    size: 30,
    icon: '4g',
}
