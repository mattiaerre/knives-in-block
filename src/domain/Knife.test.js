import classNames from 'classnames';
import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { useState } from 'react';

function Knife({ color }) {
  const states = { block: 'block', down: 'down', up: 'up' };

  const [state, setState] = useState(states.down);

  function handleOnClick() {
    setState(states.up);
  }

  return (
    <div
      className={classNames(color, state)}
      data-testid="knife"
      onClick={handleOnClick}
    ></div>
  );
}

it('renders correctly', () => {
  const tree = create(<Knife color={'red'} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('from down to up', async () => {
  render(<Knife color={'red'} />);
  await userEvent.click(screen.getByTestId('knife'));
  expect(screen.getByTestId('knife')).toHaveClass('up');
});
