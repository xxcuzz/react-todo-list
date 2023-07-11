import {useState, useEffect} from 'react'
import FILTER from '../constants/TodoFilter';

function useTodoFilter(todos) {
  const [filter, setFilter] = useState(FILTER.ALL);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    switch (filter) {
      case FILTER.ALL:
        setFilteredTodos(todos);
        break;
      case FILTER.ACTIVE:
        setFilteredTodos(todos?.filter((todo) => !todo.completed));
        break;
      case FILTER.COMPLETED:
        setFilteredTodos(todos?.filter((todo) => todo.completed));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }, [todos, filter]);

  return {
    setFilter,
    filteredTodos,
  };
}

export default useTodoFilter