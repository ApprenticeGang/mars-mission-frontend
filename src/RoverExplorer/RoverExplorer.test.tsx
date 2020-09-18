import React from 'react';
import { render } from '@testing-library/react';
import {
    BrowserRouter as Router,
  
} from "react-router-dom";

import { RoverExplorer } from "./RoverExplorer";

test('renders Rover explorer link', () => {
    const { getByText } = render(<Router><RoverExplorer /></Router>);
    const linkElement = getByText(/Rover explorer/i);
    expect(linkElement).toBeInTheDocument();
});
