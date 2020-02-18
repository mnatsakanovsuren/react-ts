import React, { useState, useEffect } from "react";
import {TodoForm} from "../components/TodoForm";
import {TodoList} from "../components/TodoList";
import {ITodo} from "../interfaces";

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        setTodos(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        };
        setTodos(prevState => [newTodo, ...prevState]);
    };

    const toggleHandler = (id: number) => {
        setTodos(prevState => prevState.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo;
        }))
    };

    const removeHandler = (id: number) => {
        const shouldRemove = window.confirm("Are you sure?");
        if (shouldRemove) {
            setTodos(prevState => prevState.filter(todo => todo.id !== id))
        }
    };

    return <>
        <h1 className="center">Todo App</h1>
        <TodoForm onAdd={addHandler}/>
        <br/>
        <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
    </>
}