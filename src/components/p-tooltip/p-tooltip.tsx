import { Component, Host, Prop, h } from '@stencil/core'

@Component({
    tag: 'p-tooltip',
    styleUrl: 'p-tooltip.scss',
    shadow: true,
})
export class PTooltip {
    @Prop()
    title?: string
    @Prop()
    disabled?: boolean = false
    @Prop()
    left?: boolean = false
    @Prop()
    right?: boolean = false
    @Prop()
    bottom?: boolean = false
    @Prop()
    top?: boolean = false

    render() {
        return (
            <Host>
                <div class="papier">
                    <div
                        popover-left={this.left && !this.disabled ? this.title : null}
                        popover-right={this.right && !this.disabled ? this.title : null}
                        popover-bottom={this.bottom && !this.disabled ? this.title : null}
                        popover-top={this.top && !this.disabled ? this.title : null}
                    >
                        <slot />
                    </div>
                </div>
            </Host>
        )
    }
}
