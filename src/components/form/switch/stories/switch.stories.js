export default {
    title: 'Form/Switch/Playground',
    argTypes: {
        round: {
            name: 'round',
            control: 'boolean',
        },
        square: {
            name: 'square',
            control: 'boolean',
        },
        checked: {
            name: 'checked',
            control: 'boolean',
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
        <p-switch
            ${args.round ? 'round' : ''}
            ${args.square ? 'square' : ''}
            ${args.darkMode ? 'dark' : ''}
            ${args.checked ? 'checked' : ''}
        >
        </p-switch>`

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
    round: false,
    square: false,
    checked: false,
    darkMode: false,
}
