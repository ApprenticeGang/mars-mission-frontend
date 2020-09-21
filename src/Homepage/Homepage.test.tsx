import React from 'react';
import { render } from '@testing-library/react';
import { Home } from './Homepage';
import { App } from '../App';
import { TimelineId } from "../TimelineID/TimelineId"


test('renders HomePage', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Home/);
    expect(linkElement).toBeInTheDocument()
});