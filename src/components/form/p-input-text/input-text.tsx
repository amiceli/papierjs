import { Component, Event, type EventEmitter, h, Prop, State, Watch } from '@stencil/core'
import { DarkModeController } from '@/utils/dark-mode'

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

    /**
     * Force dark or light mode. If not provided, the component follows
     * the browser preference (`prefers-color-scheme`).
     */
    @Prop()
    dark?: boolean

    @Prop()
    label?: string

    @Prop()
    disabled?: boolean = false

    @Prop()
    block?: boolean = false

    @Prop()
    error?: string

    @State()
    private isDark: boolean = false

    private darkController = new DarkModeController({
        onChange: (v) => {
            this.isDark = v
        },
        getProp: () => this.dark,
    })

    componentWillLoad() {
        this.darkController.connect()
    }

    disconnectedCallback() {
        this.darkController.disconnect()
    }

    @Watch('dark')
    onDarkChange() {
        this.darkController.update()
    }

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

        if (this.isDark) {
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
