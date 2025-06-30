export default {
    title: 'Components/Spinner/Playground',
}

const Template = (args) => {
    return `
        <p-leaf>
            <h3>p-spinner</h3>
        </p-leaf>
        <br />
        <div style='padding: 10px; background: ${args.dark ? '#41403e' : 'white'}'>
            <p-spinner
                color="${args.color}"
                ${args.large ? 'large' : ''}
                ${args.dark ? 'dark' : ''}
            ></p-spinner>
        </div>
    `
}

export const Playground = Template.bind({})

Playground.args = {
    dark: false,
    large: false,
    color: 'inherit',
}
