import { Component, Element, h, State } from '@stencil/core'
import type { PushOptions } from '../p-notification-handler'

@Component({
    tag: 'p-notification-preview',
})
export class PNotificationPreview {
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
                    onSelect={(e: CustomEvent) => {
                        this.notificationType = e.detail
                    }}
                    placeholder="Choose notification type"
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

                <div
                    style={{
                        marginTop: '20px',
                    }}
                >
                    <p-button
                        onClick={() => {
                            this.addNotification({})
                        }}
                        style={{
                            marginRight: '20px',
                        }}
                        type="primary"
                    >
                        Add notification
                    </p-button>
                    <p-button
                        onClick={() => {
                            this.addNotification({
                                canclose: true,
                            })
                        }}
                        style={{
                            marginRight: '20px',
                        }}
                        type="secondary"
                    >
                        Add closable notification
                    </p-button>
                    <p-button
                        onClick={() => {
                            this.addNotification({
                                timeout: 2000,
                            })
                        }}
                        type="success"
                    >
                        Add timeout notification
                    </p-button>
                </div>
            </div>
        )
    }
}
