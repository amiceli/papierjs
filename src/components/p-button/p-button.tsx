import { Component, Element, h, Prop, State, Watch } from '@stencil/core'
import { DarkModeController } from '@/utils/dark-mode'

type ButtonColor = 'success' | 'secondary' | 'primary' | 'danger' | 'warning'

/**
 * @slot - button content
 */
@Component({
    tag: 'p-button',
    styleUrl: 'p-button.scss',
    shadow: true,
})
export class PButton {
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
    /**
     * Force dark or light mode. If not provided, the component follows
     * the browser preference (`prefers-color-scheme`).
     */
    @Prop()
    dark?: boolean
    @Prop()
    loading?: boolean = false

    @State()
    private isDark: boolean = false

    private darkController = new DarkModeController({
        onChange: (v) => {
            this.isDark = v
        },
        getProp: () => this.dark,
    })

    componentWillLoad() {
        this.darkController.connect()
    }

    disconnectedCallback() {
        this.darkController.disconnect()
    }

    @Watch('dark')
    onDarkChange() {
        this.darkController.update()
    }

    public getClass(): string {
        const types = [
            'success',
            'secondary',
            'primary',
            'danger',
            'warning',
        ]
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

        if (this.isDark) {
            cssClass = `${cssClass} is--dark`
        }

        return cssClass
    }
    render() {
        const color = `var(--${this.type}${this.isDark ? '-light' : ''})`

        return (
            <div class={this.getParentClass()}>
                <button class={this.getClass()} disabled={this.disabled} type="button">
                    {!this.loading ? <slot /> : <p-spinner color={color} dark={this.isDark} />}
                </button>
            </div>
        )
    }
}
