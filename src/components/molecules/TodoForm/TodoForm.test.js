import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

import TodoForm from './TodoForm';

describe('Todo Form', () => {
  test('calls onAddTodo when AddButton is clicked', () => {
    const onAddTodoMock = jest.fn();
    const { getByRole, getByPlaceholderText } = render(<TodoForm onAddTodo={onAddTodoMock} />);
    const input = getByPlaceholderText('Enter new item here');
    fireEvent.change(input, { target: { value: 'New item' } });
    const addButton = getByRole('button');
    fireEvent.click(addButton);
    expect(onAddTodoMock).toHaveBeenCalledTimes(1);
  });

  test('calls onAddTodo when Enter key is pressed in input', () => {
    const onAddTodoMock = jest.fn();
    const { getByPlaceholderText } = render(<TodoForm onAddTodo={onAddTodoMock} />);
    const input = getByPlaceholderText('Enter new item here');
    fireEvent.change(input, { target: { value: 'New item' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(onAddTodoMock).toHaveBeenCalledWith('New item');
  });

  test('does not call onAddTodo when Enter key is pressed in empty input', () => {
    const onAddTodoMock = jest.fn();
    const { getByPlaceholderText } = render(<TodoForm onAddTodo={onAddTodoMock} />);
    const input = getByPlaceholderText('Enter new item here');
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(onAddTodoMock).not.toHaveBeenCalled();
  });
})