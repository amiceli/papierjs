import { Component, Element, Host, h, Prop, State } from '@stencil/core'

/**
 * @slot header - card header
 * @slot title - card title
 * @slot subtitle - card subtitle
 * @slot text - card text
 * @slot footer - card footer
 */
@Component({
    tag: 'p-card',
    styleUrl: 'p-card.scss',
    shadow: true,
})
export class PCard {
    @Prop()
    dark?: boolean = false
    /**
     * Use border radius style like button, badge etc
     */
    @Prop()
    radius?: boolean = false
    @Prop()
    image?: string
    @Element()
    el: HTMLElement
    @State()
    hasHeader: boolean
    @State()
    hasFooter: boolean

    componentDidLoad() {
        this.hasHeader = !!this.el.querySelector('[slot="header"]')
        this.hasFooter = !!this.el.querySelector('[slot="footer"]')
    }

    render() {
        return (
            <Host>
                <div
                    class={{
                        papier: true,
                        'is--dark': this.dark,
                        'has--header': this.hasHeader === true,
                        'has--footer': this.hasFooter,
                        'with--radius': this.radius,
                    }}
                >
                    <div class="card">
                        <div class="card-header">
                            <slot name="header" />
                        </div>
                        {this.image && <img alt="card-img" class="image-top" src={this.image} />}
                        <div class="card-body">
                            <h4 class="card-title">
                                <slot name="title" />
                            </h4>
                            <h5 class="card-subtitle">
                                <slot name="subtitle" />
                            </h5>
                            <p class="card-text">
                                <slot name="text" />
                            </p>
                            <slot />
                        </div>
                        <div class="card-footer">
                            <slot name="footer" />
                        </div>
                    </div>
                </div>
            </Host>
        )
    }
}
