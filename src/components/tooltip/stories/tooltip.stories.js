export default {
    title: 'Components/Tooltip/Playground',
}

const Template = (args) => {
    return `
        <div style="width: 400px">
            <p-tooltip 
                ${args.disabled ? 'disabled' : ''}
                ${args.top ? 'top' : ''}
                ${args.right ? 'right' : ''}
                ${args.left ? 'left' : ''}
                ${args.bottom ? 'bottom' : ''}
                title="${args.title}"
            >
                <p-button>Click here ;)</p-button>
            </p-tooltip>
        </div>
    `
}

export const Playground = Template.bind({})

Playground.args = {
    title: 'Awesome',
    left: false,
    right: true,
    bottom: false,
    top: false,
    disabled: false,
}
