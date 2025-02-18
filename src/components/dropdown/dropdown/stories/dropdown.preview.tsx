import { Component, Element, State, h } from '@stencil/core'

@Component({
    tag: 'p-dropdown-preview',
})
export class Alert {
    @State()
    value: string = ''
    @State()
    selectedValue: string = ''
    @Element()
    public el: HTMLElement

    public showModal(value: string) {
        this.el.querySelector('p-modal')?.open()
        this.value = value
    }

    public onValidate() {
        this.selectedValue = this.value
        this.onClose()
    }

    public onClose() {
        this.el.querySelector('p-modal')?.close()
    }

    render() {
        return (
            <div>
                <p-modal>
                    <p>
                        You select <b>{this.value}</b>
                    </p>
                    <br />
                    <p-button type="success" onClick={() => this.onValidate()}>
                        I validate
                    </p-button>
                    &nbsp;
                    <p-button type="danger" onClick={() => this.onClose()}>
                        No !
                    </p-button>
                </p-modal>
                <p-dropdown
                    placeholder="Choose best framework"
                    prevent-selected
                    onSelect={(e: CustomEvent) => this.showModal(e.detail)}
                    value={this.selectedValue}
                >
                    <p-dropdown-item
                        value="awesome"
                        selected={this.selectedValue === 'awesome'}
                    >
                        Vue
                    </p-dropdown-item>
                    <p-dropdown-item
                        value="Stencil"
                        selected={this.selectedValue === 'Stencil'}
                    >
                        Stencil
                    </p-dropdown-item>
                    <p-dropdown-item
                        value="Storybook"
                        selected={this.selectedValue === 'Storybook'}
                    >
                        Storybook
                    </p-dropdown-item>
                </p-dropdown>
            </div>
        )
    }
}
