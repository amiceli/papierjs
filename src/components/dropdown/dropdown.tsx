import {
    Component,
    Element,
    Event,
    type EventEmitter,
    Listen,
    Prop,
    State,
    h,
} from '@stencil/core'
import feather from 'feather-icons'

@Component({
    tag: 'p-dropdown',
    styleUrl: 'dropdown.scss',
    shadow: true,
})
export class Alert {
    @Prop()
    dark?: boolean = false
    @State()
    open?: boolean = false
    @Prop()
    placeholder?: string
    @State()
    selectedValue?: string
    @Element()
    public el: HTMLElement

    @Event({ eventName: 'select' })
    public selectEvent: EventEmitter<string>

    public getParentClass() {
        let cssClass = 'papier dropdown' // is--block

        if (this.dark) {
            cssClass = `${cssClass} is--dark`
        }
        if (this.open) {
            cssClass = `${cssClass} is--open`
        }

        return cssClass
    }

    @Listen('click', { target: 'window' })
    public detectOutsideClick(ev) {
        if (this.el.contains(ev.target)) {
            return
        }
        this.open = false
    }

    public componentDidLoad() {
        const items = Array.from(
            this.el.getElementsByTagName('p-dropdown-item'),
        )

        for (const item of items) {
            if (this.dark) {
                item.setAttribute('dark', 'true')
            }
            item.addEventListener('change', (e) => {
                this.selectEvent.emit(e.detail)
                this.open = !this.open
            })
        }
    }

    public selectValue(value: string) {
        this.selectEvent.emit(value)
    }

    public getSelectedValue(): string {
        const items = this.el.getElementsByTagName('p-dropdown-item')
        const list = Array.from(items)
        const selected = list.find((item) => {
            const attr = item.getAttribute('selected')

            return attr === 'true' || attr === ''
        })

        return selected?.innerText || this.placeholder || ''
    }

    render() {
        const selected = this.getSelectedValue()
        const arrowIcon = feather.icons['chevron-down'].toSvg()
        return (
            <div class={this.getParentClass()}>
                <div
                    class="dropdown__header border border-primary"
                    onClick={() => {
                        this.open = !this.open
                    }}
                >
                    <span>{selected}</span>
                    <span class="for--icon" innerHTML={arrowIcon} />
                </div>
                <div class="dropdown__children">
                    <slot />
                </div>
            </div>
        )
    }
}
