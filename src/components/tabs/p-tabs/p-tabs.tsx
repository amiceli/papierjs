import { Component, Element, Host, Prop, State, h } from '@stencil/core'
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
    tabs: PTab[] = []
    @State()
    selectedTab?: PTab
    @Prop()
    dark?: boolean = false

    public componentDidLoad() {
        const slot = this.el.shadowRoot.querySelector('slot')
        const tabs = slot.assignedElements() as unknown as PTab[]

        this.tabs = tabs

        for (const tab of this.tabs) {
            if (this.dark) {
                ;(tab as unknown as HTMLElement).setAttribute('dark', 'true')
            } else {
                ;(tab as unknown as HTMLElement).removeAttribute('dark')
            }
        }
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

    render() {
        return (
            <Host>
                <div
                    class={{
                        'is--dark': this.dark,
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
