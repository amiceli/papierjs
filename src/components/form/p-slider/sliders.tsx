import { Component, Event, type EventEmitter, Host, h, Prop } from '@stencil/core'

@Component({
    tag: 'p-slider',
    styleUrl: 'slider.scss',
    shadow: true,
})
export class PSlider {
    @Prop()
    value?: number = 0
    @Prop()
    min?: number = 0
    @Prop()
    max?: number
    @Prop()
    block?: boolean = false
    @Prop()
    dark?: boolean = false

    @Event({
        eventName: 'change',
    })
    public changeEvent: EventEmitter<number>

    public onInput(e: Event) {
        this.changeEvent.emit(Number.parseInt((e.target as HTMLInputElement).value))
    }

    render() {
        return (
            <Host>
                <div
                    class={{
                        papier: true,
                        'is--block': this.block,
                        'is--dark': this.dark,
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
