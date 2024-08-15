import { render, screen } from '@testing-library/react';
import ParchView from './parch-view';

test('renders learn react link', () => {
  render(<ParchView />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
