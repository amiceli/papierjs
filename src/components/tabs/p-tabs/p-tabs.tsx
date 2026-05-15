import { Component, Element, Host, h, Prop, State, Watch } from '@stencil/core'
import { DarkModeController } from '@/utils/dark-mode'
import type { PTab } from '../p-tab/p-tab'

/** @slot - slot with <p-tab> components */
@Component({
    tag: 'p-tabs',
    styleUrl: 'p-tabs.scss',
    shadow: true,
})
export class PTabs {
    @Element()
    public el: HTMLElement
    @State()
    public tabs: PTab[] = []
    @State()
    public selectedTab?: PTab
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
            this.syncItems()
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

    private syncItems() {
        for (const tab of this.tabs) {
            if (this.isDark) {
                ;(tab as unknown as HTMLElement).setAttribute('dark', 'true')
            } else {
                ;(tab as unknown as HTMLElement).removeAttribute('dark')
            }
        }
    }

    public componentDidLoad() {
        const slot = this.el.shadowRoot.querySelector('slot')
        const tabs = slot.assignedElements() as unknown as PTab[]

        this.tabs = tabs

        this.syncItems()
        this.updateSelectedTab()
    }

    public onSelectTab(t: PTab) {
        for (const tab of this.tabs) {
            tab.selected = false
        }
        t.selected = true

        this.selectedTab = t
    }

    public updateSelectedTab() {
        this.selectedTab = this.tabs.find((s) => s.selected === true)

        if (!this.selectedTab) {
            if (this.tabs.at(0)) {
                this.onSelectTab(this.tabs.at(0))
            }
        }
    }

    public getTabClass(tab: PTab) {
        const isSame = tab.title === this.selectedTab?.title

        return {
            'is--selected': isSame && tab.selected,
        }
    }

    public render() {
        return (
            <Host>
                <div
                    class={{
                        'is--dark': this.isDark,
                        papier: true,
                    }}
                >
                    <div class="row flex-spaces tabs">
                        {this.tabs.map((t) => {
                            return (
                                <label class={this.getTabClass(t)} htmlFor="tab1" key={t.title} onClick={() => this.onSelectTab(t)}>
                                    {t.title}
                                </label>
                            )
                        })}
                        <div class="content">
                            <slot />
                        </div>
                    </div>
                </div>
            </Host>
        )
    }
}
