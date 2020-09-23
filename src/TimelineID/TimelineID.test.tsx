import React from 'react';
import {  render } from '@testing-library/react';
import { TimelineId} from './TimelineId';
import { MemoryRouter, Route } from 'react-router-dom'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

test('renders Rover Timeline', () => {
    const queries = render(<MemoryRouter initialEntries={["/timeline/perserverance"]}>
            <Route path="/timeline/:roverName">
                <TimelineId />
            </Route>
    </MemoryRouter>);
    mockAllIsIntersecting(true);

    const timelineElements = queries.getAllByText('Perserverance')
    expect(timelineElements).toHaveLength(4);
});

test('if there is no rover with that name displays Unable to find rover', () => {
    const queries = render(<MemoryRouter initialEntries={["/timeline/NO_ROVER_WITH_THAT_NAME"]}>
    <Route path="/timeline/:roverName">
        <TimelineId />
    </Route>
</MemoryRouter>);
    const unableToFindMessage = queries.getByText('Unable to find rover with name: NO_ROVER_WITH_THAT_NAME')
    expect(unableToFindMessage).toBeInTheDocument();   
})
