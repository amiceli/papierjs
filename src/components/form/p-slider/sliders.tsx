import { Component, Event, type EventEmitter, Host, h, Prop, State, Watch } from '@stencil/core'
import { DarkModeController } from '@/utils/dark-mode'

@Component({
    tag: 'p-slider',
    styleUrl: 'slider.scss',
    shadow: true,
})
export class PSlider {
    @Prop()
    public value?: number = 0
    @Prop()
    public min?: number = 0
    @Prop()
    public max?: number
    @Prop()
    public block?: boolean = false
    /**
     * Force dark or light mode. If not provided, the component follows
     * the browser preference (`prefers-color-scheme`).
     */
    @Prop()
    public dark?: boolean

    @State()
    private isDark: boolean = false

    private darkController = new DarkModeController({
        onChange: (v) => {
            this.isDark = v
        },
        getProp: () => this.dark,
    })

    public componentWillLoad() {
        this.darkController.connect()
    }

    public disconnectedCallback() {
        this.darkController.disconnect()
    }

    @Watch('dark')
    public onDarkChange() {
        this.darkController.update()
    }

    @Event({
        eventName: 'change',
    })
    public changeEvent: EventEmitter<number>

    public onInput(e: Event) {
        this.changeEvent.emit(Number.parseInt((e.target as HTMLInputElement).value))
    }

    public render() {
        return (
            <Host>
                <div
                    class={{
                        papier: true,
                        'is--block': this.block,
                        'is--dark': this.isDark,
                    }}
                >
                    <div class="form-group">
                        <input
                            class="input-block"
                            max={this.max}
                            min={this.min}
                            onInput={(e) => {
                                this.onInput(e)
                            }}
                            type="range"
                            value={this.value}
                        />
                    </div>
                </div>
            </Host>
        )
    }
}
