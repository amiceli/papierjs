export default {
    title: 'Components/Dropdown/Overview',
}

const Template = () => {
    return `
        <div>
            <p-leaf>
                <h3>Dropdown</h3>
                <p>
                    By default dropdown update and display selected value :
                </p>
            </p-leaf>
        </div>
        <p-dropdown value="Vue js">
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

        <div>
            <p-leaf>
                <p>
                    You can use placeholder if no value is selected
                </p>
            </p-leaf>
        </div>
        <p-dropdown placeholder="Choose a framework">
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

        <div>
            <p-leaf>
                <p>
                    You can prevent update selected value and update yourself selected value
                </p>
            </p-leaf>
        </div>
        <p-dropdown-preview></p-dropdown-preview>

        <div>
            <p-leaf>
                <h3>Dark mode</h3>
            </p-leaf>
        </div>
        <p-dropdown dark placeholder="Choose best framework">
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
    `
}

export const Overview = Template.bind({})
