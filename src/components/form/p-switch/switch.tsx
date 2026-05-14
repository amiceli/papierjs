import { Component, Event, type EventEmitter, Host, h, Prop, State, Watch } from '@stencil/core'
import { DarkModeController } from '@/utils/dark-mode'

@Component({
    tag: 'p-switch',
    styleUrl: 'switch.scss',
    shadow: true,
})
export class PSwitch {
    /** define switch style */
    @Prop()
    public round?: boolean = false
    /** define switch parent style */
    @Prop()
    public square?: boolean = false
    /**
     * Force dark or light mode. If not provided, the component follows
     * the browser preference (`prefers-color-scheme`).
     */
    @Prop()
    public dark?: boolean
    @Prop()
    public checked?: boolean = false

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
    public changeEvent: EventEmitter<boolean>

    public onInput(e: Event) {
        this.changeEvent.emit((e.target as HTMLInputElement).checked)
    }

    render() {
        return (
            <Host>
                <div
                    class={{
                        papier: true,
                        'is--dark': this.isDark,
                    }}
                >
                    <div class="form-group">
                        <label
                            class={{
                                'paper-switch': !this.square,
                                'paper-switch-2': this.square,
                            }}
                        >
                            <input
                                checked={this.checked}
                                id="paperSwitch4"
                                name="paperSwitch4"
                                onInput={(e) => this.onInput(e)}
                                type="checkbox"
                            />
                            <span
                                class={{
                                    round: this.round,
                                    'paper-switch-slider': true,
                                }}
                            />
                        </label>
                    </div>
                </div>
            </Host>
        )
    }
}
