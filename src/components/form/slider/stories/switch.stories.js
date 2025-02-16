export default {
    title: 'Form/Slider/Playground',
}

const Template = (args) => {
    const content = `
        <p-slider
            min="${args.min}"
            max="${args.max}"
            value="${args.value}"
            ${args.darkMode ? 'dark' : ''}
            ${args.block ? 'block' : ''}
        >
        </p-slider>`

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
    value: 10,
    min: 0,
    max: 100,
    block: false,
    darkMode: false,
}
