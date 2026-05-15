import { Component, Host, h, Prop } from '@stencil/core'

@Component({
    tag: 'p-tooltip',
    styleUrl: 'p-tooltip.scss',
    shadow: true,
})
export class PTooltip {
    @Prop()
    public title?: string
    @Prop()
    public disabled?: boolean = false
    @Prop()
    public left?: boolean = false
    @Prop()
    public right?: boolean = false
    @Prop()
    public bottom?: boolean = false
    @Prop()
    public top?: boolean = false

    public render() {
        return (
            <Host>
                <div class="papier">
                    <div
                        popover-bottom={this.bottom && !this.disabled ? this.title : null}
                        popover-left={this.left && !this.disabled ? this.title : null}
                        popover-right={this.right && !this.disabled ? this.title : null}
                        popover-top={this.top && !this.disabled ? this.title : null}
                    >
                        <slot />
                    </div>
                </div>
            </Host>
        )
    }
}
