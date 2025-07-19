import { Component, Host, h, Prop, State } from '@stencil/core'
import { icons } from './icons'

@Component({
    tag: 'p-icon',
    styleUrl: 'p-icon.scss',
    shadow: true,
})
export class PIcon {
    @Prop()
    public icon: string

    @Prop()
    public size: number = 20

    @Prop()
    public color: string = 'inherit'

    @State()
    public svgContent: string

    render() {
        return (
            <Host>
                <div
                    innerHTML={icons[this.icon]}
                    style={{
                        color: this.color,
                        width: `${this.size}px`,
                    }}
                />
            </Host>
        )
    }
}
