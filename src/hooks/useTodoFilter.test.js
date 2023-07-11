import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react';

import useTodoFilter from './useTodoFilter';

describe('useTodoFilter', () => {
  const todos = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    { id: 3, title: 'Task 3', completed: false },
  ];

  test('returns all todos by default', () => {
    const { result } = renderHook(() => useTodoFilter(todos));

    expect(result.current.filteredTodos).toEqual(todos);
  });

  test('returns active todos when active filter is set', () => {
    const { result } = renderHook(() => useTodoFilter(todos));

    act(() => {
      result.current.setFilter('Active');
    });

    expect(result.current.filteredTodos).toEqual([
      { id: 1, title: 'Task 1', completed: false },
      { id: 3, title: 'Task 3', completed: false },
    ]);
  });

  test('returns completed todos when completed filter is set', () => {
    const { result } = renderHook(() => useTodoFilter(todos));

    act(() => {
      result.current.setFilter('Completed');
    });
    
    expect(result.current.filteredTodos).toEqual([{ id: 2, title: 'Task 2', completed: true }]);
  });
});
