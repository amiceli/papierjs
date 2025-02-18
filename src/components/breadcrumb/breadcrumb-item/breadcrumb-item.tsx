import { Component, Element, Prop, h } from '@stencil/core'

@Component({
    tag: 'p-breadcrumb-item',
    styleUrl: '../breadcrumb/breadcrumb.scss',
    shadow: true,
})
export class Alert {
    @Prop()
    dark?: boolean = false
    @Prop()
    first?: boolean = false
    @Prop()
    link?: string
    @Element()
    public el: HTMLElement

    public getParentClass() {
        let cssClass = 'papier breadcrumb-item'

        if (this.dark) {
            cssClass = `${cssClass} is--dark`
        }
        if (this.first) {
            cssClass = `${cssClass} is--first`
        }

        return cssClass
    }

    render() {
        return (
            <span class={this.getParentClass()}>
                {this.link ? (
                    <a href={this.link}>
                        <slot />
                    </a>
                ) : (
                    <slot />
                )}
            </span>
        )
    }
}
