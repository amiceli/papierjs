import { Component, Event, type EventEmitter, Host, Prop, h } from '@stencil/core'

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
    /** Enable dark mode */
    @Prop()
    public dark?: boolean = false
    @Prop()
    public checked?: boolean = false
    @Prop()
    public checkedBackground?: TileBackground = 'primary'
    @Prop()
    public uncheckedBackground?: TileBackground

    @Event({ eventName: 'change' })
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

    render() {
        return (
            <Host>
                <div
                    class={{
                        papier: true,
                        'is--dark': this.dark,
                    }}
                >
                    <div class="form-group">
                        <label htmlFor="paperSwitch1" class="paper-switch-tile">
                            <input id="paperSwitch1" name="paperSwitch1" type="checkbox" checked={this.checked} />
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
