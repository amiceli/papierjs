// biome-ignore lint/correctness/noUnusedImports: required for jsx
import { Component, Event, type EventEmitter, Prop, h } from '@stencil/core'

@Component({
    tag: 'p-input-text',
    styleUrl: 'input-text.scss',
    shadow: true,
})
export class InputText {
    @Prop()
    placeholder?: string
    @Prop()
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

    @Event({ eventName: 'change' })
    public changeEvent: EventEmitter<string>

    public getParentClass() {
        let cssClass = 'papier form-group'

        if (this.dark) {
            cssClass = `${cssClass} is--dark`
        }
        if (this.block) {
            cssClass = `${cssClass} is--block`
        }

        return cssClass
    }

    public onChange(e: Event) {
        this.changeEvent.emit((e.target as HTMLInputElement).value)
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
                    value={this.value}
                    onChange={(e) => this.onChange(e)}
                />
            </div>
        )
    }
}
