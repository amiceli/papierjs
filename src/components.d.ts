/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PAlert {
        "closable"?: boolean;
        "dark"?: boolean;
        "type"?: AlertColor;
    }
    interface PBadge {
        "dark"?: boolean;
        "type"?: BadgeColor;
    }
    interface PBreadcrumb {
        "dark"?: boolean;
    }
    interface PBreadcrumbItem {
        "dark"?: boolean;
        "first"?: boolean;
        "link"?: string;
    }
    interface PButton {
        "block"?: boolean;
        "dark"?: boolean;
        "disabled"?: boolean;
        "large"?: boolean;
        "outline"?: boolean;
        "small"?: boolean;
        "type"?: ButtonColor;
    }
    interface PDropdown {
        "dark"?: boolean;
        "placeholder"?: string;
    }
    interface PDropdownItem {
        "dark"?: boolean;
        "selected"?: boolean;
        "value": string;
    }
    interface PInputText {
        "block"?: boolean;
        "dark"?: boolean;
        "disabled"?: boolean;
        "hasError"?: boolean;
        "label"?: string;
        "placeholder"?: string;
        "required"?: boolean;
        "value"?: string;
    }
    interface PLeaf {
        "dark"?: boolean;
    }
    interface PProgressBar {
        "dark"?: boolean;
        "striped"?: boolean;
        "type"?: ProgressBarColor;
        "value"?: number;
    }
}
export interface PAlertCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPAlertElement;
}
export interface PDropdownCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPDropdownElement;
}
export interface PDropdownItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPDropdownItemElement;
}
export interface PInputTextCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPInputTextElement;
}
declare global {
    interface HTMLPAlertElementEventMap {
        "close": any;
    }
    interface HTMLPAlertElement extends Components.PAlert, HTMLStencilElement {
        addEventListener<K extends keyof HTMLPAlertElementEventMap>(type: K, listener: (this: HTMLPAlertElement, ev: PAlertCustomEvent<HTMLPAlertElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLPAlertElementEventMap>(type: K, listener: (this: HTMLPAlertElement, ev: PAlertCustomEvent<HTMLPAlertElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLPAlertElement: {
        prototype: HTMLPAlertElement;
        new (): HTMLPAlertElement;
    };
    interface HTMLPBadgeElement extends Components.PBadge, HTMLStencilElement {
    }
    var HTMLPBadgeElement: {
        prototype: HTMLPBadgeElement;
        new (): HTMLPBadgeElement;
    };
    interface HTMLPBreadcrumbElement extends Components.PBreadcrumb, HTMLStencilElement {
    }
    var HTMLPBreadcrumbElement: {
        prototype: HTMLPBreadcrumbElement;
        new (): HTMLPBreadcrumbElement;
    };
    interface HTMLPBreadcrumbItemElement extends Components.PBreadcrumbItem, HTMLStencilElement {
    }
    var HTMLPBreadcrumbItemElement: {
        prototype: HTMLPBreadcrumbItemElement;
        new (): HTMLPBreadcrumbItemElement;
    };
    interface HTMLPButtonElement extends Components.PButton, HTMLStencilElement {
    }
    var HTMLPButtonElement: {
        prototype: HTMLPButtonElement;
        new (): HTMLPButtonElement;
    };
    interface HTMLPDropdownElementEventMap {
        "select": string;
    }
    interface HTMLPDropdownElement extends Components.PDropdown, HTMLStencilElement {
        addEventListener<K extends keyof HTMLPDropdownElementEventMap>(type: K, listener: (this: HTMLPDropdownElement, ev: PDropdownCustomEvent<HTMLPDropdownElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLPDropdownElementEventMap>(type: K, listener: (this: HTMLPDropdownElement, ev: PDropdownCustomEvent<HTMLPDropdownElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLPDropdownElement: {
        prototype: HTMLPDropdownElement;
        new (): HTMLPDropdownElement;
    };
    interface HTMLPDropdownItemElementEventMap {
        "change": string;
    }
    interface HTMLPDropdownItemElement extends Components.PDropdownItem, HTMLStencilElement {
        addEventListener<K extends keyof HTMLPDropdownItemElementEventMap>(type: K, listener: (this: HTMLPDropdownItemElement, ev: PDropdownItemCustomEvent<HTMLPDropdownItemElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLPDropdownItemElementEventMap>(type: K, listener: (this: HTMLPDropdownItemElement, ev: PDropdownItemCustomEvent<HTMLPDropdownItemElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLPDropdownItemElement: {
        prototype: HTMLPDropdownItemElement;
        new (): HTMLPDropdownItemElement;
    };
    interface HTMLPInputTextElementEventMap {
        "change": string;
    }
    interface HTMLPInputTextElement extends Components.PInputText, HTMLStencilElement {
        addEventListener<K extends keyof HTMLPInputTextElementEventMap>(type: K, listener: (this: HTMLPInputTextElement, ev: PInputTextCustomEvent<HTMLPInputTextElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLPInputTextElementEventMap>(type: K, listener: (this: HTMLPInputTextElement, ev: PInputTextCustomEvent<HTMLPInputTextElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLPInputTextElement: {
        prototype: HTMLPInputTextElement;
        new (): HTMLPInputTextElement;
    };
    interface HTMLPLeafElement extends Components.PLeaf, HTMLStencilElement {
    }
    var HTMLPLeafElement: {
        prototype: HTMLPLeafElement;
        new (): HTMLPLeafElement;
    };
    interface HTMLPProgressBarElement extends Components.PProgressBar, HTMLStencilElement {
    }
    var HTMLPProgressBarElement: {
        prototype: HTMLPProgressBarElement;
        new (): HTMLPProgressBarElement;
    };
    interface HTMLElementTagNameMap {
        "p-alert": HTMLPAlertElement;
        "p-badge": HTMLPBadgeElement;
        "p-breadcrumb": HTMLPBreadcrumbElement;
        "p-breadcrumb-item": HTMLPBreadcrumbItemElement;
        "p-button": HTMLPButtonElement;
        "p-dropdown": HTMLPDropdownElement;
        "p-dropdown-item": HTMLPDropdownItemElement;
        "p-input-text": HTMLPInputTextElement;
        "p-leaf": HTMLPLeafElement;
        "p-progress-bar": HTMLPProgressBarElement;
    }
}
declare namespace LocalJSX {
    interface PAlert {
        "closable"?: boolean;
        "dark"?: boolean;
        "onClose"?: (event: PAlertCustomEvent<any>) => void;
        "type"?: AlertColor;
    }
    interface PBadge {
        "dark"?: boolean;
        "type"?: BadgeColor;
    }
    interface PBreadcrumb {
        "dark"?: boolean;
    }
    interface PBreadcrumbItem {
        "dark"?: boolean;
        "first"?: boolean;
        "link"?: string;
    }
    interface PButton {
        "block"?: boolean;
        "dark"?: boolean;
        "disabled"?: boolean;
        "large"?: boolean;
        "outline"?: boolean;
        "small"?: boolean;
        "type"?: ButtonColor;
    }
    interface PDropdown {
        "dark"?: boolean;
        "onSelect"?: (event: PDropdownCustomEvent<string>) => void;
        "placeholder"?: string;
    }
    interface PDropdownItem {
        "dark"?: boolean;
        "onChange"?: (event: PDropdownItemCustomEvent<string>) => void;
        "selected"?: boolean;
        "value"?: string;
    }
    interface PInputText {
        "block"?: boolean;
        "dark"?: boolean;
        "disabled"?: boolean;
        "hasError"?: boolean;
        "label"?: string;
        "onChange"?: (event: PInputTextCustomEvent<string>) => void;
        "placeholder"?: string;
        "required"?: boolean;
        "value"?: string;
    }
    interface PLeaf {
        "dark"?: boolean;
    }
    interface PProgressBar {
        "dark"?: boolean;
        "striped"?: boolean;
        "type"?: ProgressBarColor;
        "value"?: number;
    }
    interface IntrinsicElements {
        "p-alert": PAlert;
        "p-badge": PBadge;
        "p-breadcrumb": PBreadcrumb;
        "p-breadcrumb-item": PBreadcrumbItem;
        "p-button": PButton;
        "p-dropdown": PDropdown;
        "p-dropdown-item": PDropdownItem;
        "p-input-text": PInputText;
        "p-leaf": PLeaf;
        "p-progress-bar": PProgressBar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "p-alert": LocalJSX.PAlert & JSXBase.HTMLAttributes<HTMLPAlertElement>;
            "p-badge": LocalJSX.PBadge & JSXBase.HTMLAttributes<HTMLPBadgeElement>;
            "p-breadcrumb": LocalJSX.PBreadcrumb & JSXBase.HTMLAttributes<HTMLPBreadcrumbElement>;
            "p-breadcrumb-item": LocalJSX.PBreadcrumbItem & JSXBase.HTMLAttributes<HTMLPBreadcrumbItemElement>;
            "p-button": LocalJSX.PButton & JSXBase.HTMLAttributes<HTMLPButtonElement>;
            "p-dropdown": LocalJSX.PDropdown & JSXBase.HTMLAttributes<HTMLPDropdownElement>;
            "p-dropdown-item": LocalJSX.PDropdownItem & JSXBase.HTMLAttributes<HTMLPDropdownItemElement>;
            "p-input-text": LocalJSX.PInputText & JSXBase.HTMLAttributes<HTMLPInputTextElement>;
            "p-leaf": LocalJSX.PLeaf & JSXBase.HTMLAttributes<HTMLPLeafElement>;
            "p-progress-bar": LocalJSX.PProgressBar & JSXBase.HTMLAttributes<HTMLPProgressBarElement>;
        }
    }
}
