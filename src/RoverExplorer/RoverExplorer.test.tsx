import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { RoverExplorer } from "./RoverExplorer"

test('renders Rover explorer link', () => {
    const { getByText } = render(<RoverExplorer />);
    const linkElement = getByText(/Rover explorer/i);
    expect(linkElement).toBeInTheDocument();
});
