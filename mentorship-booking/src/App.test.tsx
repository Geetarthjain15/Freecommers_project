import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders mentorship booking app', () => {
  render(<App />);
  const titleElement = screen.getByText(/mentorship booking/i);
  expect(titleElement).toBeInTheDocument();
});
