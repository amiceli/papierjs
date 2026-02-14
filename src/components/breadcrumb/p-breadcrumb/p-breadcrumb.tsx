import { Component, Element, h, Prop } from '@stencil/core'

@Component({
    tag: 'p-breadcrumb',
    styleUrl: 'p-breadcrumb.scss',
    shadow: true,
})
export class PBreadcrumb {
    @Prop()
    dark?: boolean = false

    @Element()
    public el: HTMLElement

    public getParentClass() {
        let cssClass = 'papier is--block breadcrumb'

        if (this.dark) {
            cssClass = `${cssClass} is--dark`
        }

        return cssClass
    }

    public componentDidLoad() {
        const items = Array.from(this.el.getElementsByTagName('p-breadcrumb-item'))

        if (this.dark) {
            for (const item of items) {
                item.setAttribute('dark', 'true')
            }
        }

        items.at(0)?.setAttribute('first', 'true')
    }

    render() {
        return (
            <div class={this.getParentClass()}>
                <div class="border">
                    <slot />
                </div>
            </div>
        )
    }
}
