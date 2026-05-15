# p-switch-tile



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute              | Description                                                                                                       | Type                                                           | Default     |
| --------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ----------- |
| `checked`             | `checked`              |                                                                                                                   | `boolean`                                                      | `false`     |
| `checkedBackground`   | `checked-background`   |                                                                                                                   | `"danger" \| "muted" \| "primary" \| "secondary" \| "success"` | `'primary'` |
| `dark`                | `dark`                 | Force dark or light mode. If not provided, the component follows the browser preference (`prefers-color-scheme`). | `boolean`                                                      | `undefined` |
| `uncheckedBackground` | `unchecked-background` |                                                                                                                   | `"danger" \| "muted" \| "primary" \| "secondary" \| "success"` | `undefined` |


## Events

| Event    | Description | Type                   |
| -------- | ----------- | ---------------------- |
| `change` |             | `CustomEvent<boolean>` |


## Slots

| Slot               | Description                             |
| ------------------ | --------------------------------------- |
| `"checked-text"`   | displayed text when switch is checked   |
| `"unchecked-text"` | displayed text when switch is unchecked |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
