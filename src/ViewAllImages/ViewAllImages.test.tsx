import React from 'react';
import { render } from '@testing-library/react';
import { AllImages } from './AllImages';


test('renders Rover explorer link', () => {
    const { getByText } = render(<AllImages />);
    const linkElement = getByText(/View All Images Page/i);
    expect(linkElement).toBeInTheDocument();
});