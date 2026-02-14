import { Component, Event, type EventEmitter, h, Prop } from '@stencil/core'

@Component({
    tag: 'p-input-text',
    styleUrl: 'input-text.scss',
    shadow: true,
})
export class PInputText {
    @Prop()
    placeholder?: string

    /**
     * Any icon allowed with p-icon can be used
     */
    @Prop()
    icon?: string

    @Prop({
        mutable: true,
    })
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

    @Event({
        eventName: 'change',
    })
    public changeEvent: EventEmitter<string>

    @Event({
        eventName: 'input',
    })
    public inputEvent: EventEmitter<string>

    public getParentClass() {
        let cssClass = 'papier form-group'

        if (this.dark) {
            cssClass = `${cssClass} is--dark`
        }
        if (this.icon) {
            cssClass = `${cssClass} with--icon`
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
                <div class="for--input">
                    {this.icon && <p-icon color="inherit" icon={this.icon} size={30}></p-icon>}
                    <input
                        disabled={this.disabled}
                        id="paperInputs1"
                        onChange={() => this.onChange()}
                        onInput={(e) => {
                            this.onInput(e)
                        }}
                        placeholder={this.placeholder}
                        type="text"
                        value={this.value}
                    />
                </div>
                {this.error && <p class="text-danger">{this.error}</p>}
            </div>
        )
    }
}
