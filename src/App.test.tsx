import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Rover explorer link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Rover explorer/i);
    expect(linkElement).toBeInTheDocument();
});
s