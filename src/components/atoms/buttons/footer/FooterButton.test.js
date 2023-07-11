import '@testing-library/jest-dom';
import { cleanup, fireEvent, render } from '@testing-library/react';

import FooterButton from './FooterButton';

afterEach(() => {
  cleanup();
});

describe('Footer Button', () => {
  test('Button renders correctly', () => {
    const buttonText = 'I am button';
    const { getByText } = render(<FooterButton text={buttonText} />);
    const button = getByText(buttonText);

    expect(button).toBeInTheDocument();
  });

  test('Calls onClick when button is clicked', () => {
    const onClickMock = jest.fn();
    const button = render(<FooterButton onClick={onClickMock} />).getByRole('button');
    fireEvent.click(button);

    expect(onClickMock).toBeCalledTimes(1);
  });
});
