/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "@stencil-community/router";
export namespace Components {
    interface AppHome {
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface PageButton {
    }
    interface RiButton {
        "disabled": boolean;
        "label": string;
        "size": string;
        "type": string;
    }
    interface RiDropdown {
    }
    interface RiInput {
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLPageButtonElement extends Components.PageButton, HTMLStencilElement {
    }
    var HTMLPageButtonElement: {
        prototype: HTMLPageButtonElement;
        new (): HTMLPageButtonElement;
    };
    interface HTMLRiButtonElement extends Components.RiButton, HTMLStencilElement {
    }
    var HTMLRiButtonElement: {
        prototype: HTMLRiButtonElement;
        new (): HTMLRiButtonElement;
    };
    interface HTMLRiDropdownElement extends Components.RiDropdown, HTMLStencilElement {
    }
    var HTMLRiDropdownElement: {
        prototype: HTMLRiDropdownElement;
        new (): HTMLRiDropdownElement;
    };
    interface HTMLRiInputElement extends Components.RiInput, HTMLStencilElement {
    }
    var HTMLRiInputElement: {
        prototype: HTMLRiInputElement;
        new (): HTMLRiInputElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "page-button": HTMLPageButtonElement;
        "ri-button": HTMLRiButtonElement;
        "ri-dropdown": HTMLRiDropdownElement;
        "ri-input": HTMLRiInputElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface PageButton {
    }
    interface RiButton {
        "disabled"?: boolean;
        "label": string;
        "onClickEmitter"?: (event: CustomEvent<any>) => void;
        "size"?: string;
        "type"?: string;
    }
    interface RiDropdown {
    }
    interface RiInput {
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "page-button": PageButton;
        "ri-button": RiButton;
        "ri-dropdown": RiDropdown;
        "ri-input": RiInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "page-button": LocalJSX.PageButton & JSXBase.HTMLAttributes<HTMLPageButtonElement>;
            "ri-button": LocalJSX.RiButton & JSXBase.HTMLAttributes<HTMLRiButtonElement>;
            "ri-dropdown": LocalJSX.RiDropdown & JSXBase.HTMLAttributes<HTMLRiDropdownElement>;
            "ri-input": LocalJSX.RiInput & JSXBase.HTMLAttributes<HTMLRiInputElement>;
        }
    }
}
