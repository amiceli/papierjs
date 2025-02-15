import { Component, Event, type EventEmitter, Prop, h } from '@stencil/core'

@Component({
    tag: 'p-dropdown-item',
    styleUrl: '../dropdown/dropdown.scss',
    shadow: true,
})
export class Alert {
    @Prop()
    value: string
    @Prop()
    selected?: boolean = false
    @Prop()
    dark?: boolean = false

    @Event({ eventName: 'change' })
    public changeEvent: EventEmitter<string>

    public getParentClass() {
        let cssClass = 'papier dropdown-item'

        if (this.dark) {
            cssClass = `${cssClass} is--dark`
        }

        return cssClass
    }

    public sendClick() {
        this.changeEvent.emit(this.value)
    }

    render() {
        return (
            <div class={this.getParentClass()} onClick={() => this.sendClick()}>
                <div class="border border-primary">
                    <slot />
                </div>
            </div>
        )
    }
}
