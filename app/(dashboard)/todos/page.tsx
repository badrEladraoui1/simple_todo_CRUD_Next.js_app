import React from "react";

import db from "@/utils/db";
import TodoList from "@/components/TodoList";

import { TodoType } from "@/types";

const getTodos = async (): Promise<TodoType[]> => {
  const todos = await db.todo.findMany({});
  return todos;
};

const TodosPage = async () => {
  const todos = await getTodos();
  return (
    <section>
      <TodoList todos={todos} />
    </section>
  );
};

export default TodosPage;
