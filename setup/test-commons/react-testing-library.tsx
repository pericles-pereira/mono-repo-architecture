import { RenderOptions, RenderResult, render as rtlRender } from "@testing-library/react";
import React, { PropsWithChildren } from "react";

function DefaultWrapper({ children }: PropsWithChildren): React.ReactNode {
    return children;
}

export const customRender = (AllTheProviders = DefaultWrapper) => {
    return (ui: React.ReactElement, options: RenderOptions = {}): RenderResult => {
        return rtlRender(ui, {wrapper: AllTheProviders, ...options});
    };
};

export * from "@testing-library/react"

export const render = () => console.error('Please create your own render method using customRender');
