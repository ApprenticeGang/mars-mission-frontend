import React from 'react';
import { render } from '@testing-library/react';
import { Home } from './Homepage';
import { BrowserRouter as Router } from 'react-router-dom';


test('renders HomePage', () => {
    const { getByText } = render(<Router><Home /></Router>);
    const linkElement = getByText(/ENTER MARS/);
    expect(linkElement).toBeInTheDocument()
});