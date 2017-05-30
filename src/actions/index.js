var nextTodoId = 0;

export const addTodo = (text) => ({
  id: nextTodoId++,
  type: "ADD_TODO",
  text: text
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id: id
});

export const visibilityFilter = (filter) => ({
  type: "VISIBILITY_FILTER",
  filter: filter
});
