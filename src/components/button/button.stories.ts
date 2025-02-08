export default {
    // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
    title: 'Components/Button',
}

const Template = (args) => `
    <p-button type="${args.type}">Awesome</p-button>
`

export const Index = Template.bind({})
Index.args = {
    type: 'success',
}
