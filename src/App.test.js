import { render, screen } from '@testing-library/react';
import App from './App';

test('looks for the default goblin', () => {
  render(<App />);
  const linkElement = screen.getAllByRole('img');
  expect(linkElement[0]).toBeInTheDocument();
  expect(linkElement[0].src === 'goblin.png');
});
