"use client";

import React, { useTransition } from "react";

import { TodoType } from "@/types";

import { completeTodo, resetTodo } from "@/utils/actions";

interface TodoProps {
  todo: TodoType;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <section>
      <li
        onClick={() => {
          if (todo.completed) {
            startTransition(() => resetTodo(todo.id));
          } else {
            startTransition(() => completeTodo(todo.id));
          }
        }}
        className={`cursor-pointer text-2xl font-mono ${
          todo.completed ? "line-through" : "no-underline"
        }`}
      >
        {todo.content}
      </li>
    </section>
  );
};

export default Todo;
