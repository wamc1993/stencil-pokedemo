/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PokeContainer {
    }
    interface PokeDetail {
    }
    interface PokeGrid {
        "itemSize": number;
    }
    interface PokeHelpText {
        "image": string;
        "text": string;
    }
    interface PokeSearchBar {
    }
}
export interface PokeGridCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPokeGridElement;
}
export interface PokeSearchBarCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPokeSearchBarElement;
}
declare global {
    interface HTMLPokeContainerElement extends Components.PokeContainer, HTMLStencilElement {
    }
    var HTMLPokeContainerElement: {
        prototype: HTMLPokeContainerElement;
        new (): HTMLPokeContainerElement;
    };
    interface HTMLPokeDetailElement extends Components.PokeDetail, HTMLStencilElement {
    }
    var HTMLPokeDetailElement: {
        prototype: HTMLPokeDetailElement;
        new (): HTMLPokeDetailElement;
    };
    interface HTMLPokeGridElement extends Components.PokeGrid, HTMLStencilElement {
    }
    var HTMLPokeGridElement: {
        prototype: HTMLPokeGridElement;
        new (): HTMLPokeGridElement;
    };
    interface HTMLPokeHelpTextElement extends Components.PokeHelpText, HTMLStencilElement {
    }
    var HTMLPokeHelpTextElement: {
        prototype: HTMLPokeHelpTextElement;
        new (): HTMLPokeHelpTextElement;
    };
    interface HTMLPokeSearchBarElement extends Components.PokeSearchBar, HTMLStencilElement {
    }
    var HTMLPokeSearchBarElement: {
        prototype: HTMLPokeSearchBarElement;
        new (): HTMLPokeSearchBarElement;
    };
    interface HTMLElementTagNameMap {
        "poke-container": HTMLPokeContainerElement;
        "poke-detail": HTMLPokeDetailElement;
        "poke-grid": HTMLPokeGridElement;
        "poke-help-text": HTMLPokeHelpTextElement;
        "poke-search-bar": HTMLPokeSearchBarElement;
    }
}
declare namespace LocalJSX {
    interface PokeContainer {
    }
    interface PokeDetail {
    }
    interface PokeGrid {
        "itemSize"?: number;
        "onSelectePokemonEvent"?: (event: PokeGridCustomEvent<string>) => void;
    }
    interface PokeHelpText {
        "image"?: string;
        "text"?: string;
    }
    interface PokeSearchBar {
        "onFilterByNameEvent"?: (event: PokeSearchBarCustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "poke-container": PokeContainer;
        "poke-detail": PokeDetail;
        "poke-grid": PokeGrid;
        "poke-help-text": PokeHelpText;
        "poke-search-bar": PokeSearchBar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "poke-container": LocalJSX.PokeContainer & JSXBase.HTMLAttributes<HTMLPokeContainerElement>;
            "poke-detail": LocalJSX.PokeDetail & JSXBase.HTMLAttributes<HTMLPokeDetailElement>;
            "poke-grid": LocalJSX.PokeGrid & JSXBase.HTMLAttributes<HTMLPokeGridElement>;
            "poke-help-text": LocalJSX.PokeHelpText & JSXBase.HTMLAttributes<HTMLPokeHelpTextElement>;
            "poke-search-bar": LocalJSX.PokeSearchBar & JSXBase.HTMLAttributes<HTMLPokeSearchBarElement>;
        }
    }
}