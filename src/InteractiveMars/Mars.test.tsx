import React from 'react';
import { render } from '@testing-library/react';
import { Mars, renderToolTipsOnHover } from './Mars';
import { Marker } from "react-globe"

test('renders Mars ', () => {
    const { getByText } = render(<Mars />);
    const linkElement = getByText(/ /);
    expect(linkElement).toBeInTheDocument();
});

test('Tooltip returns info', () => {
    const marker: Marker = 
        {
            id: "1",
            rover: 'Curiosity',
            color: 'red',
            coordinates: [4.5895, 137.4417],
            value: 35,
        }

    const output = `ROVER: ${marker.rover}`
    expect(renderToolTipsOnHover(marker)).toBe(output)
})