import '@testing-library/jest-dom';
import { cleanup, fireEvent, render } from '@testing-library/react';

import AddButton from './AddButton';

afterEach(() => {
  cleanup();
});

describe('Add Button', () => {
    const onClickMock = jest.fn();
    const getAddButton = () => render(<AddButton onClick={onClickMock}/>).getByRole('button');

  test('Button renders correctly', () => {
    const button = getAddButton();
    expect(button).toBeInTheDocument('Button should be rendered');
  });

  test('Button text renders correctly', () => {
    const button = getAddButton();
    expect(button).toHaveTextContent('ADD', 'Button should have text "ADD"');
  });

  test('Calls onClick when button is clicked', () => {
    const button = getAddButton();
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1, 'onClick should be called twice');
  });
});
