export default {
    title: 'Components/Buttons/Playground',
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['success', 'secondary', 'warning', 'danger'],
            name: 'checked-background',
        },
        darkMode: {
            name: 'dark mode',
            control: 'boolean',
        },
    },
}

const Template = (args) => {
    const content = `
        <div style="width: 400px">
            <p-button
                type="${args.type}"
                ${args.darkMode ? 'dark' : ''}
                ${args.outline ? 'outline' : ''}
                ${args.small ? 'small' : ''}
                ${args.large ? 'large' : ''}
                ${args.block ? 'block' : ''}
                ${args.disabled ? 'disabled' : ''}
            >
                ${args.contenr}
            </p-button>
        </div>
    `

    return args.darkMode
        ? `
        <div style="padding: 10px; box-sizing: border-box; width: 100%; background: #41403e">
            ${content}
        </div>
    `
        : content
}

export const Playground = Template.bind({})

Playground.args = {
    contenr: 'Awesome button',
    type: 'success',
    darkMode: false,
    outline: false,
    large: false,
    small: false,
    block: false,
    disabled: false,
}
