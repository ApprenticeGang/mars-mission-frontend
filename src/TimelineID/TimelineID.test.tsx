import React from 'react';
import {  render } from '@testing-library/react';
import { TimelineId} from './TimelineId';
import { MemoryRouter, Route } from 'react-router-dom'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

test('renders Rover Timeline', () => {
    const {getByText} = render(<MemoryRouter initialEntries={["/timeline/perserverance"]}>
            <Route path="/timeline/:roverName">
                <TimelineId />
            </Route>
    </MemoryRouter>);
    mockAllIsIntersecting(true);
    const linkElement = getByText(/perserverance image explorer/i);
    expect(linkElement).toBeInTheDocument();
});



