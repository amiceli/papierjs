import { Component, Event, type EventEmitter, Host, Prop, h } from '@stencil/core'

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
    @Prop()
    public dark?: boolean = false
    @Prop()
    public checked?: boolean = false

    @Event({ eventName: 'change' })
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
                        'is--dark': this.dark,
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
                                id="paperSwitch4"
                                name="paperSwitch4"
                                type="checkbox"
                                checked={this.checked}
                                onInput={(e) => this.onInput(e)}
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
