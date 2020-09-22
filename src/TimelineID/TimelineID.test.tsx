import React from 'react';
import { render } from '@testing-library/react';
import { TimelineId } from './TimelineId';
import { MemoryRouter, Route } from 'react-router-dom'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';




// beforeAll(()=> {
//     const observe = jest.fn();
//     const unobserve = jest.fn();
//     const disconnect = jest.fn();
// // you can also pass the mock implementation
// // to jest.fn as an argument
// window.IntersectionObserver = jest.fn(() => ({
//     disconnect,
//     observe,
//     unobserve,
// })) as any

// })

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





