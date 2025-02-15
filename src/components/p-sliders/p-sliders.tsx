import {
    Component,
    Event,
    type EventEmitter,
    Host,
    Prop,
    h,
} from '@stencil/core'

@Component({
    tag: 'p-sliders',
    styleUrl: 'p-sliders.scss',
    shadow: true,
})
export class PSliders {
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

    @Event({ eventName: 'change' })
    public changeEvent: EventEmitter<number>

    public onInput(e: Event) {
        this.changeEvent.emit(
            Number.parseInt((e.target as HTMLInputElement).value),
        )
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
                            type="range"
                            min={this.min}
                            max={this.max}
                            value={this.value}
                            onInput={(e) => {
                                this.onInput(e)
                            }}
                        />
                    </div>
                </div>
            </Host>
        )
    }
}
