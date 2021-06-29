import React, { useState } from 'react';
import './App.css';
import { InputTodo } from './components/InputTodo'
import { IncompleteTodo } from './components/IncompleteTodo'
import { CompleteTodo } from './components/CompleteTodo'

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setConpleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickCompleat = (index) => {
    const newIncompletetodos = [...incompleteTodos];
    newIncompletetodos.splice(index, 1);

    const newCompleateTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompletetodos);
    setConpleteTodos(newCompleateTodos);
  }
  const onClickReturn = (index) => {
    const newCompleateTodos = [...completeTodos];
    newCompleateTodos.splice(index, 1);

    const newIncompletetodos = [...incompleteTodos, completeTodos[index]];

    setIncompleteTodos(newIncompletetodos);
    setConpleteTodos(newCompleateTodos);
  }

  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} disabled={incompleteTodos.length >= 5} />
      {incompleteTodos.length >= 5 && <p style={{ color: 'red' }}>登録できるtodoは5個までです。消化してから追加をお願いします。</p>}
      
      <IncompleteTodo incompleteTodos={incompleteTodos} onClickCompleat={onClickCompleat} onClickDelete={onClickDelete} />
      <CompleteTodo completeTodos={completeTodos} onClick={onClickReturn} />

    </>
  );
}

