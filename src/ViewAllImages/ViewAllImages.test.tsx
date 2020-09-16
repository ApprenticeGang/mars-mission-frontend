import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { AllImages } from './AllImages';
import {
    BrowserRouter as Router,
    useParams
} from "react-router-dom";

test('renders Rover explorer link', () => {
    const { getByText } = render(<AllImages />);
    const linkElement = getByText(/View All Images Page/i);
    expect(linkElement).toBeInTheDocument();
});
