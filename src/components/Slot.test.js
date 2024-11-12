import { DOWN } from './constants';
import Slot from './Slot';
import { render } from '@testing-library/react';

it('renders w/ knife', () => {
  const { asFragment } = render(
    <Slot
      id="s1"
      knife={{ color: 'blue', id: 'k1', state: DOWN }}
      onClick={() => {}}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

it('renders w/o knife', () => {
  const { asFragment } = render(<Slot id="s2" onClick={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});
