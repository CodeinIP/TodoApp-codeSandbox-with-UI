import React, { useState } from "react";
import styles from "./todo.module.css";
export const TodoApp = () => {
  const initialTodos = [
    {
      id: 1,
      title: "Learn react",
      done: false
    },
    {
      id: 2,
      title: "Learn list",
      done: false
    },
    {
      id: 3,
      title: "Learn state",
      done: false
    }
  ];
  const [todos, setTodos] = useState(initialTodos);
  const [text, setText] = useState("");
  const handleStatus = (id) => {
    console.log(id);
    let res = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    console.log(res);
    setTodos(res);
  };
  return (
    <>
      <div className={styles.todoApp}>
        <div className={styles.todoItems}>
          {todos.map((todo) => (
            <div key={todo.id} className={styles.todoItem}>
              <h2 className={todo.done && styles.done}>{todo.title}</h2>
              <input
                className={styles.checkbox}
                onChange={() => handleStatus(todo.id)}
                type="checkbox"
              />
            </div>
          ))}
        </div>
        <div className={styles.todoInputDiv}>
          <input
            className={styles.todoInput}
            type="text"
            placeholder="Write Something.."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className={styles.todoAddBtn}
            onClick={() => {
              if (text) {
                setTodos([
                  ...todos,
                  { id: Date.now(), title: text, done: false }
                ]);
              }
              setText("");
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};
