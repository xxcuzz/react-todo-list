import '@testing-library/jest-dom';
import { cleanup, fireEvent, render } from '@testing-library/react';

import AddTodoInput from './AddTodoInput';

afterEach(() => {
  cleanup();
});

describe('AddTodo input', () => { 
  test('Should render correctly', () => { 
    const placeholderText = 'Enter new item here';
    const { getByPlaceholderText } = render(<AddTodoInput value="" onChange={() => {}} onKeyDown={() => {}} />);
    const input = getByPlaceholderText(placeholderText);

    expect(input).toBeInTheDocument();
   });

   test('calls onChange when input value changes', () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText } = render(<AddTodoInput value="" onChange={onChangeMock} onKeyDown={() => {}} />);
    const input = getByPlaceholderText('Enter new item here');

    fireEvent.change(input, { target: { value: 'New item' } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  test('calls onKeyDown when key is pressed', () => {
    const onKeyDownMock = jest.fn();
    const { getByPlaceholderText } = render(<AddTodoInput value="" onChange={() => {}} onKeyDown={onKeyDownMock} />);
    const input = getByPlaceholderText('Enter new item here');

    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(onKeyDownMock).toHaveBeenCalledTimes(1);
  });

  test('calls focus() on input when component is mounted', () => {
    const focusSpy = jest.spyOn(HTMLInputElement.prototype, 'focus');
    render(<AddTodoInput value="" onChange={() => {}} onKeyDown={() => {}} />);
    
    expect(focusSpy).toHaveBeenCalledTimes(1);
    
    focusSpy.mockRestore();
  });
 })