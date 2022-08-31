import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherPanels from './WeatherPanels';

test('renders learn react link', () => {
  render(<WeatherPanels />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
