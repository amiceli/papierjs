import { Component, Event, type EventEmitter, Host, h, Prop, State, Watch } from '@stencil/core'
import { DarkModeController } from '@/utils/dark-mode'

type TileBackground = 'primary' | 'danger' | 'secondary' | 'success' | 'muted'

/**
 * @slot unchecked-text - displayed text when switch is unchecked
 * @slot checked-text - displayed text when switch is checked
 */
@Component({
    tag: 'p-switch-tile',
    styleUrl: 'switch-tile.scss',
    shadow: true,
})
export class PSwitchTile {
    /**
     * Force dark or light mode. If not provided, the component follows
     * the browser preference (`prefers-color-scheme`).
     */
    @Prop()
    public dark?: boolean
    @Prop()
    public checked?: boolean = false
    @Prop()
    public checkedBackground?: TileBackground = 'primary'
    @Prop()
    public uncheckedBackground?: TileBackground

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
    public changeEvent: EventEmitter<boolean>

    public onInput(e: Event) {
        this.changeEvent.emit((e.target as HTMLInputElement).checked)
    }

    public getFrontCardClass() {
        const cssClass = {
            'paper-switch-tile-card-front': true,
            border: true,
        }

        cssClass[`background-${this.uncheckedBackground}`] = true

        return cssClass
    }

    public getBackCardClass() {
        const cssClass = {
            'paper-switch-tile-card-back': true,
            border: true,
        }

        cssClass[`background-${this.checkedBackground}`] = true

        return cssClass
    }

    public render() {
        return (
            <Host>
                <div
                    class={{
                        papier: true,
                        'is--dark': this.isDark,
                    }}
                >
                    <div class="form-group">
                        <label class="paper-switch-tile" htmlFor="paperSwitch1">
                            <input checked={this.checked} id="paperSwitch1" name="paperSwitch1" type="checkbox" />
                            <div class="paper-switch-tile-card border">
                                <div class={this.getFrontCardClass()}>
                                    <slot name="unchecked-text" />
                                </div>
                                <div class={this.getBackCardClass()}>
                                    <slot name="checked-text" />
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </Host>
        )
    }
}
