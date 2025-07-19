import { Component, Element, Event, type EventEmitter, h, Listen, Prop, State } from '@stencil/core'
import feather from 'feather-icons'

/**
 * @slot - slot for p-dropdown-item
 */
@Component({
    tag: 'p-dropdown',
    styleUrl: 'p-dropdown.scss',
    shadow: true,
})
export class PDropdown {
    @Prop()
    dark?: boolean = false
    /** Prevent dropdown self update selected value */
    @Prop()
    preventSelected?: boolean = false
    /** Selected item value */
    @Prop({
        mutable: true,
    })
    value?: string = ''
    @State()
    open?: boolean = false
    @Prop()
    placeholder?: string
    @State()
    selectedValue?: string
    @Element()
    public el: HTMLElement

    @Event({
        eventName: 'select',
    })
    public selectEvent: EventEmitter<string>

    public getParentClass() {
        return {
            'papier dropdown': true,
            'is--dark': this.dark,
            'is--open': this.open,
        }
    }

    @Listen('click', {
        target: 'window',
    })
    public detectOutsideClick(ev) {
        if (!this.el.contains(ev.target)) {
            this.open = false
        }
    }

    public resetItem() {
        const items = Array.from(this.el.getElementsByTagName('p-dropdown-item'))

        for (const item of items) {
            item.removeAttribute('selected')
        }
    }

    public componentWillLoad() {
        const items = Array.from(this.el.getElementsByTagName('p-dropdown-item'))

        for (const item of items) {
            if (this.dark) {
                item.setAttribute('dark', 'true')
            }
            if (item.selected === true) {
                this.value = item.value
            }
            item.addEventListener('change', (e) => {
                this.selectEvent.emit(e.detail)
                this.open = !this.open

                if (!this.preventSelected) {
                    this.resetItem()
                    item.setAttribute('selected', '')
                    this.value = e.detail
                }
            })
        }
    }

    public selectValue(value: string) {
        this.selectEvent.emit(value)
    }

    public getSelectedValue(): string {
        const list = Array.from(this.el.querySelectorAll('p-dropdown-item'))
        const selected = list.find((item) => {
            return item.value === this.value
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
