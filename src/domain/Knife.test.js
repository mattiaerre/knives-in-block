import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Knife from './Knife';

it('renders correctly', () => {
  const { asFragment } = render(<Knife color={'red'} />);
  expect(asFragment()).toMatchSnapshot();
});

it('from down to up', async () => {
  render(<Knife color={'red'} />);
  await userEvent.click(screen.getByTestId('knife'));
  expect(screen.getByTestId('knife')).toHaveClass('up');
});

it('from down to up to down', async () => {
  render(<Knife color={'red'} />);
  await userEvent.click(screen.getByTestId('knife'));
  await userEvent.click(screen.getByTestId('knife'));
  expect(screen.getByTestId('knife')).toHaveClass('down');
});

it('from down to up to down to up', async () => {
  render(<Knife color={'red'} />);
  await userEvent.click(screen.getByTestId('knife'));
  await userEvent.click(screen.getByTestId('knife'));
  await userEvent.click(screen.getByTestId('knife'));
  expect(screen.getByTestId('knife')).toHaveClass('up');
});

it('from down to slot', async () => {
  const { getByTestId } = render(<Knife color={'red'} />);
  render(<div data-testid="slot" />);
  await userEvent.click(screen.getByTestId('knife'));
  await userEvent.click(screen.getByTestId('slot')); // probably not needed for now
  getByTestId('knife');
  expect(screen.getByTestId('knife')).toHaveClass('slot');
});
