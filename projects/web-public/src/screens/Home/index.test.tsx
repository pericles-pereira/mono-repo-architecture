import { customRender } from "@alura/test-commons/react-testing-library";
import HomeScreen from ".";
import { PropsWithChildren } from "react";

const render = customRender(({ children }: PropsWithChildren) => {
    return <section>{children}</section>;
});

describe("<HomeScreen />", () => {
    it("renders the page", () => {
        const { container } = render(<HomeScreen />);

        expect(container).toMatchSnapshot();
    });
});
