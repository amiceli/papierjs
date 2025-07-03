export default {
    title: 'Components/Dropdown/Playground',
    argTypes: {
        darkMode: {
            name: 'dark mode',
            control: 'boolean',
        },
    },
}

const Template = (args) => {
    return `
        <div style="width : 90%">
            <p-leaf>
                <h3>p-dropdown</h3>
            </p-leaf>
            <br />
            <p>
                By default dropdown update and display selected value :
            </p>
            <div>
                <p-dropdown
                    ${args.darkMode ? 'dark' : ''}
                    value="Vue js"
                    ${args.preventSelected ? 'prevent-selected' : ''}
                >
                    <p-dropdown-item value="Vue js" selected>
                        Vue Js
                    </p-dropdown-item>
                    <p-dropdown-item value="Nest">
                        Nest
                    </p-dropdown-item>
                    <p-dropdown-item value="Storybook">
                        Storybook
                    </p-dropdown-item>
                </p-dropdown>
            </div>
            <p-leaf>
                <h3>p-dropdown with placeholder</h3>
                <p>
                    But you can prevent this with 'prevent-selected' :
                </p>
            </p-leaf>
            <div>
                <p-dropdown
                    ${args.darkMode ? 'dark' : ''}
                    placeholder="${args.placeholder}"
                    ${args.preventSelected ? 'prevent-selected' : ''}
                >
                    <p-dropdown-item value="Vue js">
                        Vue Js
                    </p-dropdown-item>
                    <p-dropdown-item value="Nest">
                        Nest
                    </p-dropdown-item>
                    <p-dropdown-item value="Storybook">
                        Storybook
                    </p-dropdown-item>
                </p-dropdown>
            </div>
        </div>
    `
}

export const Playground = Template.bind({})

Playground.args = {
    darkMode: false,
    preventSelected: false,
    placeholder: 'Choose a framework',
}
