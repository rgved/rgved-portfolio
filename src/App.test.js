import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders portfolio owner name', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /rgved kulkarni/i });
  expect(heading).toBeInTheDocument();
});
