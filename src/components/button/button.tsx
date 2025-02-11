import { Component, Prop, h } from '@stencil/core'

type ButtonColor = 'success' | 'secondary' | 'primary' | 'danger' | 'warning'

@Component({
    tag: 'p-button',
    styleUrl: 'button.scss',
    shadow: true,
})
export class Button {
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
        return (
            <div class={this.getParentClass()}>
                <button
                    disabled={this.disabled}
                    type="button"
                    class={this.getClass()}
                >
                    <slot />
                </button>
            </div>
        )
    }
}
