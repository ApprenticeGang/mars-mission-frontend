import React from 'react';
import { render } from '@testing-library/react';
import { TimelineId } from './TimelineId';


test('renders Rover explorer link', () => {
    const { getByText } = render(<TimelineId />);
    const linkElement = getByText(/The current Timeline Id is:/i);
    expect(linkElement).toBeInTheDocument();
});
