export default {
    title: 'Form/Switch Tile/Playground',
    argTypes: {
        uncheckedText: {
            name: 'unchecked-text',
            control: 'text',
        },
        checkedText: {
            name: 'checked-text',
            control: 'text',
        },
        uncheckedBackground: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'warning', 'danger', 'noted'],
            name: 'unchecked-background',
        },
        checkedBackground: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'warning', 'danger', 'noted'],
            name: 'checked-background',
        },
        darkMode: {
            name: 'dark mode',
            control: 'boolean',
        },
    },

    tags: ['!autodocs'],
}

const Template = (args) => {
    const content = `
        <p-switch-tile
            unchecked-background="${args.uncheckedBackground}"
            checked-background="${args.checkedBackground}"
            ${args.darkMode ? 'dark' : ''}
        >
            <span slot="unchecked-text">${args.uncheckedText}</span>
            <span slot="checked-text">${args.checkedText}</span>
        </p-switch-tile>`

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
    uncheckedText: 'No',
    checkedText: 'Yes',
    uncheckedBackground: 'primary',
    checkedBackground: 'noted',
    darkMode: false,
}
