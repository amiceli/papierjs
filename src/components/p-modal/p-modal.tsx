import { Component, Host, Method, State, h } from '@stencil/core'

@Component({
    tag: 'p-modal',
    styleUrl: 'p-modal.scss',
    shadow: true,
})
export class PModal {
    @State()
    isOpen: boolean = false

    @Method()
    public open() {
        this.isOpen = true
    }

    @Method()
    public close() {
        this.isOpen = false
    }

    render() {
        return (
            <Host>
                {this.isOpen && (
                    <div class="papier">
                        <div class="modal">
                            <div
                                class="modal-bg"
                                onClick={() => this.close()}
                            />
                            <div class="modal-body">
                                <span
                                    class="btn-close"
                                    onClick={() => this.close()}
                                >
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
