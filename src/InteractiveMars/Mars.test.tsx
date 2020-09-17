import React from 'react';
import { render } from '@testing-library/react';
import { Mars } from './Mars';


test('renders Mars ', () => {
    const { getByText } = render(<Mars />);
    const linkElement = getByText(/ /);
    expect(linkElement).toBeInTheDocument();
});