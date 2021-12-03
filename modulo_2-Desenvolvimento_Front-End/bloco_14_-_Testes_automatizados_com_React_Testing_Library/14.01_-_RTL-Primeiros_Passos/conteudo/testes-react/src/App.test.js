import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i); ==> Caso que o teste passa
  const linkElement = screen.getByText(/algo que não aparece/i); // ==> Caso que o teste não passa
  expect(linkElement).toBeInTheDocument();
});
