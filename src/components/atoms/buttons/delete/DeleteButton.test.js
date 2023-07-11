import '@testing-library/jest-dom';
import { cleanup, fireEvent, render } from '@testing-library/react';

import DeleteButton from './DeleteButton';

afterEach(() => {
  cleanup();
});

describe('Delete Button', () => {
  test('Button renders correctly', () => {
    const { getByRole, getByAltText } =  render(<DeleteButton />);
    const button = getByRole('button');
    const altText = getByAltText('Delete');
    
    expect(button).toBeInTheDocument();
    expect(altText).toBeInTheDocument()
  });

  test('Button is disabled when disabled prop is true', () => {
    const { getByRole } = render(<DeleteButton disabled />);
    const button = getByRole('button');
    expect(button).toBeDisabled();
  });

  test('Calls onClick when button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(<DeleteButton onClick={onClickMock} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
