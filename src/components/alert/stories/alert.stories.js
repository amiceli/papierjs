export default {
    title: 'Components/Alert/Playground',
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'warning', 'danger', 'noted'],
            name: 'checked-background',
        },
        darkMode: {
            name: 'dark mode',
            control: 'boolean',
        },
        closable: {
            name: 'dark mode',
            control: 'boolean',
        },
    },
}

const Template = (args) => {
    const content = `
        <p-alert
            type="${args.type}"
            ${args.darkMode ? 'dark' : ''}
            ${args.closable ? 'closable' : ''}
        >
            ${args.contenr}
        </p-alert>`

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
    contenr: 'Alert',
    type: 'primary',
    closable: false,
    darkMode: false,
}
