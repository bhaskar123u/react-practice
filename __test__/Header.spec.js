import Header from "../src/components/Header";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

beforeEach(() => {
    render(<Header />);
});

it('Should render Header component successfully', () => {
    const headerText = screen.getByText('This is a common header component');
    expect(headerText).toBeInTheDocument();
});