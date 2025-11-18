import { render, screen } from '@testing-library/react';
import App from './App';

describe('renders learn react link', () => {
  render(<App />);
  const increment=screen.getByTestId('increment');
  const decrement=screen.getByTestId('decrement');
  const count=screen.getByTestId('count');
});
