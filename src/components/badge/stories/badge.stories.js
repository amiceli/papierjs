export default {
    title: 'Components/Badge/Playground',
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
        <h3 
            style="font-size : 40px; color: ${args.darkMode ? 'white' : 'black'}"
        >
            PapierJS : <p-badge
                type="${args.type}"
                ${args.darkMode ? 'dark' : ''}
            >
                ${args.contenr}
            </p-badge>
        </h3>
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
    contenr: 'Alert',
    type: 'success',
    darkMode: false,
}
