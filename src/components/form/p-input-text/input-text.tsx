import { Component, Event, type EventEmitter, Prop, h } from '@stencil/core'

@Component({
    tag: 'p-input-text',
    styleUrl: 'input-text.scss',
    shadow: true,
})
export class PInputText {
    @Prop()
    placeholder?: string

    @Prop({ mutable: true })
    value?: string = ''

    @Prop()
    required?: boolean = false

    @Prop()
    dark?: boolean = false

    @Prop()
    label?: string

    @Prop()
    disabled?: boolean = false

    @Prop()
    block?: boolean = false

    @Prop()
    error?: string

    @Event({ eventName: 'change' })
    public changeEvent: EventEmitter<string>

    @Event({ eventName: 'input' })
    public inputEvent: EventEmitter<string>

    public getParentClass() {
        let cssClass = 'papier form-group'

        if (this.dark) {
            cssClass = `${cssClass} is--dark`
        }
        if (this.block) {
            cssClass = `${cssClass} is--block`
        }
        if (this.error) {
            cssClass = `${cssClass} has--error`
        }

        return cssClass
    }

    public onInput(ev: Event) {
        this.value = ev.target && (ev.target as HTMLInputElement).value

        this.inputEvent.emit(this.value)
    }

    public onChange() {
        this.changeEvent.emit(this.value)
    }

    render() {
        return (
            <div class={this.getParentClass()}>
                {this.label && (
                    <label htmlFor="paperInputs1">
                        {this.label}
                        {this.required ? '*' : ''}
                    </label>
                )}
                <input
                    type="text"
                    placeholder={this.placeholder}
                    id="paperInputs1"
                    disabled={this.disabled}
                    onInput={(e) => {
                        this.onInput(e)
                    }}
                    value={this.value}
                    onChange={() => this.onChange()}
                />
                {this.error && <p class="text-danger">{this.error}</p>}
            </div>
        )
    }
}
