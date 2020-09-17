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
    const markers: Marker =
        {
            id: "1",
            rover: 'Curiosity',
            color: 'red',
            coordinates: [4.5895, 137.4417],
            value: 35,
        };
    
    const toolTipText = renderToolTipsOnHover(markers);
    
    expect(toolTipText).toBe("ROVER: Curiosity");
})