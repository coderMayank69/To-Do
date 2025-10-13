import List from '@mui/material/List';
import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const initialState = [
  { id: 1, title: 'Learn React', completed: false },
  { id: 2, title: 'Build a To-Do App', completed: true },
];

const getInitialData = () => {
  try {
    const raw = localStorage.getItem('todos');
    if (!raw) return initialState;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : initialState;
  } catch (e) {
    return initialState;
  }
}

export default function TodoList() {
  const [todos, setTodos] = useState(getInitialData);

  useEffect(() => {
    try {
      localStorage.setItem('todos', JSON.stringify(todos));
    } catch (e) {
      // ignore storage errors
    }
  }, [todos]);

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(t => t.id !== id));
  }

  const addTodo = text => {
    setTodos(prev => [...prev, { id: crypto.randomUUID(), title: text, completed: false }]);
  }

  return (
    <Box 
      sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', mt: 4 }}>

        <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>To-Dos</Typography>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggle={() => toggleTodo(todo.id)} removeTodo={() => removeTodo(todo.id)} />
      ))}
      <TodoForm addTodo={addTodo} />
    </List>
    </Box>
  );
}