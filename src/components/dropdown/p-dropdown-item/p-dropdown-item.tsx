import { Component, Event, type EventEmitter, h, Prop, State, Watch } from '@stencil/core'
import { DarkModeController } from '@/utils/dark-mode'

@Component({
    tag: 'p-dropdown-item',
    styleUrl: '../p-dropdown/p-dropdown.scss',
    shadow: true,
})
export class PDropdownItem {
    @Prop()
    public value!: string
    @Prop()
    public selected?: boolean = false
    /**
     * Force dark or light mode. If not provided, the component follows
     * the browser preference (`prefers-color-scheme`).
     */
    @Prop()
    public dark?: boolean

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

    @Event({
        eventName: 'change',
    })
    public changeEvent: EventEmitter<string>

    public getParentClass() {
        return {
            'papier dropdown-item': true,
            'is--dark': this.isDark,
        }
    }

    public sendClick() {
        this.changeEvent.emit(this.value)
    }

    public render() {
        return (
            <div class={this.getParentClass()} onClick={() => this.sendClick()}>
                <div
                    class={{
                        'background-success': this.selected,
                        'border border-primary': true,
                    }}
                >
                    <slot />
                </div>
            </div>
        )
    }
}
