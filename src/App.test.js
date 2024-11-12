import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

it('renders', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it('on click s1', () => {
  render(<App />);
  fireEvent.click(screen.getByTestId('s1'));
  expect(screen.getByTestId('s1')).toHaveClass('up');
});

it('on click s1 twice', () => {
  render(<App />);
  fireEvent.click(screen.getByTestId('s1'));
  fireEvent.click(screen.getByTestId('s1'));
  expect(screen.getByTestId('s1')).toHaveClass('down');
});

it('on click s7', () => {
  render(<App />);
  fireEvent.click(screen.getByTestId('s7'));
  expect(screen.getByTestId('s7')).toHaveClass('empty');
});

it('on click s1 then s2', () => {
  render(<App />);
  fireEvent.click(screen.getByTestId('s1'));
  fireEvent.click(screen.getByTestId('s2'));
  expect(screen.getByTestId('s1')).toHaveClass('up');
  expect(screen.getByTestId('s2')).toHaveClass('down');
});
