import { Component, h, Prop, State, Watch } from '@stencil/core'
import { DarkModeController } from '@/utils/dark-mode'

/**
 * @slots default - p-leaf content
 */
@Component({
    tag: 'p-leaf',
    styleUrl: 'p-leaf.scss',
})
export class Pleaf {
    /**
     * Force dark or light mode. If not provided, the component follows
     * the browser preference (`prefers-color-scheme`).
     */
    @Prop()
    dark?: boolean

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

    public getParentClass() {
        return this.isDark ? 'papier is--dark' : 'papier'
    }

    render() {
        return (
            <div class={this.getParentClass()}>
                <slot />
            </div>
        )
    }
}
