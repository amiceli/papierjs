import { Component, Event, type EventEmitter, Host, Method, State, h } from '@stencil/core'

@Component({
    tag: 'p-modal',
    styleUrl: 'modal.scss',
    shadow: true,
})
export class PModal {
    @State()
    isOpen: boolean = false

    @Event({ eventName: 'close' })
    public closeEvent: EventEmitter<void>

    @Method()
    public async open() {
        this.isOpen = true
    }

    @Method()
    public async close() {
        this.isOpen = false
        this.closeEvent.emit(null)
    }

    render() {
        return (
            <Host>
                {this.isOpen && (
                    <div class="papier">
                        <div class="modal">
                            <div class="modal-bg" onClick={() => this.close()} />
                            <div class="modal-body">
                                <span class="btn-close" onClick={() => this.close()}>
                                    X
                                </span>
                                <h4 class="modal-title">
                                    <slot name="title" />
                                </h4>
                                <h5 class="modal-subtitle">
                                    <slot name="sub-title" />
                                </h5>
                                <p class="modal-text">
                                    <slot name="text" />
                                </p>
                                <slot />
                            </div>
                        </div>
                    </div>
                )}
            </Host>
        )
    }
}
