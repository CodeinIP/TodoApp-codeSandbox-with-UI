import { useState } from "react";
import "../styles.css";
const initialTodos = [
  {
    id: 1,
    title: "Learn about React component",
    status: false
  },
  {
    id: 2,
    title: "Complete DSA problems",
    status: false
  }
];
export const Todo = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [text, setText] = useState("");
  return (
    <div className="todoApp">
      <h1>Todo</h1>
      <div>
        <input
          className="todoTextInput"
          placeholder="Enter task here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="addBtn"
          onClick={() => {
            if (text) {
              setTodos([
                ...todos,
                { id: Date.now(), title: text, status: false }
              ]);
              setText("");
            }
          }}
        >
          Add
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        <h2>list of tasks to complete.. </h2>
        {todos.map((todo) => (
          <div key={todo.id} className="todoItem">
            <p>
              {" "}
              {`>`} {todo.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
