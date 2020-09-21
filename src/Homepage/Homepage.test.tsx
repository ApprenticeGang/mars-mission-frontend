import React from 'react';
import { render } from '@testing-library/react';
import { Home } from './Homepage';


test('renders HomePage', () => {
    const { getByText } = render(<Home />);
    const linkElement = getByText(/Home/);
    expect(linkElement).toBeInTheDocument()
});