import { Component, Element, State, h } from '@stencil/core'
import type { PushOptions } from '../p-notification-handler'

@Component({
    tag: 'p-notification-preview',
})
export class PNotification {
    @Element()
    public el: HTMLElement

    @State()
    notificationType?: string

    public addNotification(options: Partial<PushOptions>) {
        const handler = this.el.querySelector('p-notification-handler')

        if (handler) {
            handler.pushNotification({
                type: this.notificationType,
                canclose: false,
                text: `${this.notificationType || 'primary'} notification`,
                ...options,
            })
        }
    }

    render() {
        return (
            <div>
                <p-notification-handler />
                <p-dropdown
                    placeholder="Choose notification type"
                    onSelect={(e: CustomEvent) => {
                        this.notificationType = e.detail
                    }}
                >
                    {[
                        'primary',
                        'secondary',
                        'success',
                        'warning',
                        'danger',
                    ].map((value) => {
                        return (
                            <p-dropdown-item key={value} value={value}>
                                {value}
                            </p-dropdown-item>
                        )
                    })}
                </p-dropdown>

                <div style={{ marginTop: '20px' }}>
                    <p-button
                        style={{ marginRight: '20px' }}
                        type="primary"
                        onClick={() => {
                            this.addNotification({})
                        }}
                    >
                        Add notification
                    </p-button>
                    <p-button
                        type="secondary"
                        style={{ marginRight: '20px' }}
                        onClick={() => {
                            this.addNotification({ canclose: true })
                        }}
                    >
                        Add closable notification
                    </p-button>
                    <p-button
                        type="success"
                        onClick={() => {
                            this.addNotification({ timeout: 2000 })
                        }}
                    >
                        Add timeout notification
                    </p-button>
                </div>
            </div>
        )
    }
}
