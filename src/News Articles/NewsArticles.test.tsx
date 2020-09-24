import { fetchNewsArticles } from "./NewsArticles";
import React from "react";
import { render } from '@testing-library/react';
import {
    BrowserRouter as Router
} from "react-router-dom";
import {NewsArticles} from "./NewsArticles";

test('renders News Articles', () => {
    const { getByText } = render(<NewsArticles />);
    const linkElement = getByText(/Articles/);
    expect(linkElement).toBeInTheDocument();
});

