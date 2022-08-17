import React from 'react';
import App from './App';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';

// omitted other codes
it('renders <App />', async () => {
  render(<App />);
  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
});