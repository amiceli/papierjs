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
    public el: Element
    @Prop()
    public type?: ButtonColor = 'primary'
    @Prop()
    public outline?: boolean = false
    @Prop()
    public large?: boolean = false
    @Prop()
    public small?: boolean = false
    @Prop()
    public block?: boolean = false
    @Prop()
    public disabled?: boolean = false
    /**
     * Force dark or light mode. If not provided, the component follows
     * the browser preference (`prefers-color-scheme`).
     */
    @Prop()
    public dark?: boolean
    @Prop()
    public loading?: boolean = false

    @State()
    private isDark: boolean = false

    private darkController = new DarkModeController({
        onChange: (v) => {
            this.isDark = v
        },
        getProp: () => this.dark,
    })

    public componentWillLoad() {
        this.darkController.connect()
    }

    public disconnectedCallback() {
        this.darkController.disconnect()
    }

    @Watch('dark')
    public onDarkChange() {
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
    public render() {
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
