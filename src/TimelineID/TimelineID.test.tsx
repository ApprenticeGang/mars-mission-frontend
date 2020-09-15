import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { TimelineID } from './TimelineID';
import {
    BrowserRouter as Router,
    useParams
} from "react-router-dom";

test('renders Rover explorer link', () => {
    const { getByText } = render(<TimelineID />);
    const linkElement = getByText(/The current Timeline Id is:/i);
    expect(linkElement).toBeInTheDocument();
});
