import React from "react";
import { render } from '@testing-library/react';
import {NewsArticles} from "./NewsArticles";

test('renders News Articles', () => {
    const { getByText } = render(<NewsArticles />);
    const linkElement = getByText(/Articles/);
    expect(linkElement).toBeInTheDocument();
});

