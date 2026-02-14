import { Component, Host, h, Prop } from '@stencil/core'
import feather from 'feather-icons'

/**
 * @slot - accordion content
 */
@Component({
    tag: 'p-accordion',
    styleUrl: 'p-accordion.scss',
    shadow: true,
})
export class PAccordion {
    @Prop()
    title: string
    @Prop({
        mutable: true,
    })
    open: boolean = false
    @Prop()
    dark?: boolean = false

    render() {
        const icon = feather.icons['chevron-down'].toSvg()
        const openIcon = feather.icons['chevron-up'].toSvg()

        return (
            <Host>
                <div
                    class={{
                        papier: true,
                        'is--dark': this.dark === true,
                    }}
                >
                    <div class="p-accordion is--block border">
                        <div
                            class="p-accordion__summary"
                            onClick={() => {
                                this.open = !this.open
                            }}
                        >
                            <span>{this.title}</span>
                            <span>
                                <span class="for--icon" innerHTML={this.open ? openIcon : icon} />
                            </span>
                        </div>
                        <div
                            class={{
                                'p-accordion__content': true,
                                'is--open': this.open,
                            }}
                        >
                            <slot />
                        </div>
                    </div>
                </div>
            </Host>
        )
    }
}
