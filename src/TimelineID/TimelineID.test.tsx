import React from 'react';
import { render } from '@testing-library/react';
import { TimelineID } from './TimelineID';


test('renders Rover explorer link', () => {
    const { getByText } = render(<TimelineID />);
    const linkElement = getByText(/The current Timeline Id is:/i);
    expect(linkElement).toBeInTheDocument();
});
