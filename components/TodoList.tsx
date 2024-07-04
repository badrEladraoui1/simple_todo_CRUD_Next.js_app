import React from "react";

import Todo from "./Todo";

import { TodoType } from "@/types";

interface TodoListProps {
  todos: TodoType[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <section className="flex flex-col gap-2 border-4 p-10">
      {todos.length > 0 ? (
        todos.map((todo) => <Todo key={todo.id} todo={todo} />)
      ) : (
        <h3 className="text-2xl font-mono">No Todos Yet :(</h3>
      )}
    </section>
  );
};

export default TodoList;
