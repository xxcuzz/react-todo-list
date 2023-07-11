import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';

import TodoItemCheckbox from './TodoItemCheckbox';

describe('Todo Checkbox', () => { 
  test('Should render correctly', () => { 
    const { getByRole } = render(<TodoItemCheckbox />);
    const checkbox = getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
   });

   test('Should be checked when checked prop is true', () => {
    const onChangeMock = jest.fn();
    
    // eslint-disable-next-line react/jsx-boolean-value
    const { getByRole } = render(<TodoItemCheckbox checked={true} onChange={onChangeMock}/>);
    const checkbox = getByRole('checkbox');

    expect(checkbox).toBeChecked();
   });

   test('calls onChange when checkbox is clicked', () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(<TodoItemCheckbox checked={false} onChange={onChangeMock} />);
    const checkbox = getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
 })