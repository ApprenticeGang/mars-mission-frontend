import React from 'react';
import { render } from '@testing-library/react';
import { ImageViewer } from "./ImageViewer";



test('renders Image viewer', () => {
    const { getByText } = render(<ImageViewer />);
    const linkElement = getByText(/Image Explorer/i);
    expect(linkElement).toBeInTheDocument();
});
