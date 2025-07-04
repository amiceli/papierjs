export default {
    title: 'Components/Progress bar/Playground',
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['success', 'secondary', 'warning', 'danger', 'muted', 'primary'],
            name: 'checked-background',
        },
        value: {
            type: 'number',
            min: 0,
            max: 100,
        },
        darkMode: {
            name: 'dark mode',
            control: 'boolean',
        },
    },
}

const Template = (args) => {
    const content = `
        <div style="width : 90%">
            <p-leaf>
                <h3>p-progress-bar</h3>
            </p-leaf>
            <p-progress-bar
                type="${args.type}"
                value="${args.value}"
                ${args.darkMode ? 'dark' : ''}
                ${args.striped ? 'striped' : ''}
            >
                ${args.contenr}
            </p-progress-bar>
            <p-leaf>
                <h3>CSS animation</h3>
            </p-leaf>
            <p-progress-bar
                type="${args.type}"
                id="animated-progress"
                ${args.darkMode ? 'dark' : ''}
                ${args.striped ? 'striped' : ''}
            >
                ${args.contenr}
            </p-progress-bar>
            <br />
            <p-button 
                type="secondary"
                id="animated-progress-button"
            >Add 10%</p-button>
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
    contenr: 'Awesome',
    type: 'success',
    darkMode: false,
    striped: false,
    value: 20,
}
