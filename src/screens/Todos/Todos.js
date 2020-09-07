import React, { useReducer, useState, useEffect } from 'react';

import { Container, List, TodoItem, TodoTitle, PaginationController } from './styles';
import TextInput from '~/components/TextInput';
import Button from '~/components/Button';

const INITIAL_STATE = {
  todos: [
    {id: 1, title: 'Test', done: false},
    {id: 2, title: 'Test', done: false},
    {id: 3, title: 'Test', done: false},
    {id: 4, title: 'Test', done: false},
    {id: 5, title: 'Test 1', done: false},
    {id: 6, title: 'Test 2', done: false},
    {id: 7, title: 'Test', done: false},
    {id: 8, title: 'Test', done: false},
    {id: 9, title: 'Test', done: false},
    {id: 10, title: 'Test', done: false},
    {id: 11, title: 'Test', done: false},
    {id: 12, title: 'Test 3', done: false},
    {id: 13, title: 'Test', done: false},
    {id: 14, title: 'Test', done: false},
  ],
  paginated: [],
  page: 0,
  perPage: 5,
}

const reducers = (state, action) => {
  const actions = {
    ADD_TODO: {
      ...state,
      todos: [...state.todos, action.todo],
    },
    UPDATE_PAGINATED: {
      ...state,
      paginated: [...state.todos].slice(state.page * state.perPage, state.perPage + state.page * state.perPage)
    },
    TOGGLE_TODO: {
      ...state,
      todos: state.todos.map(todo => {
        if(todo.id === action.id){
          return {...todo, done: !todo.done}
        }
        return todo
      })
    },
    NEXT_PAGE: {
      ...state,
      page: state.page + 1
    },
    PREV_PAGE: {
      ...state,
      page: state.page - 1 >= 0 ? state.page - 1 : 0
    }
  }

  return actions[action.type] || INITIAL_STATE
}

function Todos() {
  const [todoState, dispatch] = useReducer(reducers, INITIAL_STATE)
  const [input, setInput] = useState(null);

  const handleAddTodo = () => {
    dispatch({ type: 'ADD_TODO', todo: { id: Date.now(), title: input, done: false } })
    setInput(null)
  }

  const handleToggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', id })
  }

  const handleNext = () => {
    dispatch({ type: 'NEXT_PAGE' })
  }

  const handlePrev = () => {
    dispatch({ type: 'PREV_PAGE' })
  }

  useEffect(() => {
    console.tron.log(todoState)

    dispatch({ type: 'UPDATE_PAGINATED' })
  }, [todoState.todos, todoState.page])

  return (
    <Container>
      <TextInput value={input} onChangeText={text => setInput(text)} />
      <Button onPress={handleAddTodo} style={{ marginTop: 16 }}>Add</Button>
      <List>
        {todoState.paginated.map(item => (
          <TodoItem key={item.id} onPress={() => handleToggleTodo(item.id)} done={item.done}>
            <TodoTitle>{item.title}</TodoTitle>
          </TodoItem>
        ))}
      </List>
      <PaginationController>
        <Button onPress={handlePrev}>Prev</Button>
        <Button onPress={handleNext}>Next</Button>
      </PaginationController>
    </Container>
  );
}

Todos.propTypes = {
  // props here
};

export default Todos;
