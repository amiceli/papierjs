import { Component, Event, type EventEmitter, h, Prop } from '@stencil/core'

@Component({
    tag: 'p-dropdown-item',
    styleUrl: '../p-dropdown/p-dropdown.scss',
    shadow: true,
})
export class PDropdownItem {
    @Prop()
    value!: string
    @Prop()
    selected?: boolean = false
    @Prop()
    dark?: boolean = false

    @Event({
        eventName: 'change',
    })
    public changeEvent: EventEmitter<string>

    public getParentClass() {
        return {
            'papier dropdown-item': true,
            'is--dark': this.dark,
        }
    }

    public sendClick() {
        this.changeEvent.emit(this.value)
    }

    render() {
        return (
            <div class={this.getParentClass()} onClick={() => this.sendClick()}>
                <div
                    class={{
                        'background-success': this.selected,
                        'border border-primary': true,
                    }}
                >
                    <slot />
                </div>
            </div>
        )
    }
}
