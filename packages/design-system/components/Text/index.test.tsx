import React, { PropsWithChildren } from "react";
import { Text } from ".";
import { customRender } from "@alura/test-commons/react-testing-library";

const render = customRender(({ children }: PropsWithChildren) => {
    return <section>{children}</section>;
});

describe("<Text />", () => {
    it("renders h1 tag", () => {
        const { container } = render(<Text tag="h1">Sample Text</Text>);

        expect(container).toMatchSnapshot();
    });
});
