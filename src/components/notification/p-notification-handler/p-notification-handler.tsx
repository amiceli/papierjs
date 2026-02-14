import { Component, Host, h, Listen, Method, State } from '@stencil/core'

export type PushOptions = {
    type: string
    text: string
    canclose: boolean
    timeout?: number
}

type Notification = PushOptions & {
    timestamp: string
}

@Component({
    tag: 'p-notification-handler',
    styleUrl: 'p-notification-handler.scss',
    shadow: true,
})
export class PNotificationHandler {
    @State()
    public notifications: Notification[] = []

    @Method()
    public async pushNotification(options: PushOptions) {
        const { type, text, canclose, timeout } = options
        const timestamp = String(new Date().getTime())
        this.notifications = [
            ...this.notifications,
            {
                type,
                text,
                canclose,
                timestamp,
            },
        ]

        if (!timeout) return

        setTimeout(() => {
            const notification = this.notifications.find((toast) => {
                return toast.timestamp === timestamp
            })
            if (notification) {
                this.removeToast(timestamp)
            }
        }, timeout)
    }

    private removeToast(timestamp: string) {
        this.notifications = this.notifications.filter((toast) => {
            return toast.timestamp !== timestamp
        })
    }

    @Listen('close')
    public closeToastHandler(event: CustomEvent<string>) {
        this.removeToast(event.detail)
    }

    public mapNotifications() {
        return this.notifications.map((toast) => (
            <p-notification canclose={toast.canclose} key={toast.type} text={toast.text} timestamp={toast.timestamp} type={toast.type} />
        ))
    }

    render() {
        return <Host>{this.mapNotifications()}</Host>
    }
}
