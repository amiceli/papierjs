import { Component, Prop, h } from '@stencil/core'

type BadgeColor = 'secondary' | 'success' | 'warning' | 'danger'

@Component({
    tag: 'p-badge',
    styleUrl: 'badge.scss',
    shadow: true,
})
export class Badge {
    @Prop()
    type?: BadgeColor = undefined
    @Prop()
    dark?: boolean = false

    public getParentClass() {
        let cssClass = `papier`

        if (this.dark) {
            cssClass = `${cssClass} is--dark`
        }

        return cssClass
    }

    public getClass() {
        return `badge ${this.type || ''}`
    }

    render() {
        return (
            <span class={this.getParentClass()}>
                <span class={this.getClass()}>
                    <slot />
                </span>
            </span>
        )
    }
}
