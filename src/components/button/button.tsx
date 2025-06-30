import { Component, Element, Prop, h } from '@stencil/core'

type ButtonColor = 'success' | 'secondary' | 'primary' | 'danger' | 'warning'

/**
 * @slot - button content
 */
@Component({
    tag: 'p-button',
    styleUrl: 'button.scss',
    shadow: true,
})
export class Button {
    @Element()
    el: Element
    @Prop()
    type?: ButtonColor = 'primary'
    @Prop()
    outline?: boolean = false
    @Prop()
    large?: boolean = false
    @Prop()
    small?: boolean = false
    @Prop()
    block?: boolean = false
    @Prop()
    disabled?: boolean = false
    @Prop()
    dark?: boolean = false
    @Prop()
    loading?: boolean = false

    public getClass(): string {
        const types = ['success', 'secondary', 'primary', 'danger', 'warning']
        let cssClass = ''

        if (!types.includes(this.type)) {
            cssClass = 'btn-primary'
        } else {
            cssClass = `btn-${this.type}`
        }

        if (this.disabled) {
            cssClass = 'disabled'
        }

        cssClass = `${cssClass}${this.outline ? '-outline' : ''}`
        cssClass = `${cssClass}${this.large ? ' btn-large' : ''}`
        cssClass = `${cssClass}${this.small ? ' btn-small' : ''}`
        cssClass = `${cssClass}${this.block ? ' btn-block' : ''}`

        return cssClass
    }

    public getParentClass() {
        let cssClass = 'papier'

        if (this.block) {
            cssClass = `${cssClass} is--block`
        }

        if (this.dark) {
            cssClass = `${cssClass} is--dark`
        }

        return cssClass
    }
    render() {
        const color = `var(--${this.type}${this.dark ? '-light' : ''})`

        return (
            <div class={this.getParentClass()}>
                <button
                    disabled={this.disabled}
                    type="button"
                    class={this.getClass()}
                >
                    {!this.loading ? (
                        <slot />
                    ) : (
                        <p-spinner color={color} dark={this.dark} />
                    )}
                </button>
            </div>
        )
    }
}
