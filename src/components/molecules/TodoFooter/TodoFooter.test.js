import * as redux from 'react-redux';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

import TodoFooter from './TodoFooter';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('TodoFooter', () => {
  test('Should render correctly', () => {
    const uncompletedTodos = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: false },
      { id: 3, title: 'Task 3', completed: false },
    ];

    jest.spyOn(redux, 'useSelector').mockReturnValue(uncompletedTodos);
    const { getByText } = render(<TodoFooter />);
    const uncompletedItemsText = getByText('3 items left');
    expect(uncompletedItemsText).toBeInTheDocument();
  });

  test('calls setFilter when filter button is clicked', () => {
    jest.spyOn(redux, 'useSelector').mockReturnValue([]);
    const setFilterMock = jest.fn();
    const { getByText } = render(<TodoFooter setFilter={setFilterMock} />);
    const activeFilterButton = getByText('Active');
    fireEvent.click(activeFilterButton);
    expect(setFilterMock).toHaveBeenCalledWith('Active');
  });
});
