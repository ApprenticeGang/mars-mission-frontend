import React from 'react';
import { render } from '@testing-library/react';
import { SingleImagePage } from './singleImagePage';
import { images } from './imagesList';


test('renders Single Image Page', () => {
    const { getByText } = render(<SingleImagePage image={images[0]}/>);
    const linkElement = getByText(/Sol:/);
    expect(linkElement).toBeInTheDocument()
});