import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { App } from './App';
import HamburgerMenu from './Components/Hamburger/Hamburger';


test('renders Rover explorer link', () => {
    const { getAllByText } = render(<App />);
    const linkElements  = getAllByText(/Rover explorer/i);
    expect(linkElements.length).toBe(2);
});

test('renders Opportunity link', () => {
    const { getAllByText} = render(<App />);
    const linkElements = getAllByText(/Opportunity/i);
    expect(linkElements.length).toBe(2);
});

test('The burger menu doesnt contain open inititally. When clicked it does contain open. When you click a link it removes open', () =>{
    const {getByTestId} = render(<App />)
    const container = getByTestId("Hamburger Container");
    expect(container.className).not.toContain("open"); 
    const button = getByTestId("Hamburger Button");
    fireEvent.click(button);
    expect(container.className).toContain("open");
    const homeLink = getByTestId("Home Page Link");
    fireEvent.click(homeLink);
    expect(container.className).not.toContain("open");  
});
