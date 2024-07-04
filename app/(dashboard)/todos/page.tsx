import React from "react";

import db from "@/utils/db";
import TodoList from "@/components/TodoList";

import { TodoType } from "@/types";
import { resolve } from "path";

const getTodos = async (): Promise<TodoType[]> => {
  // await new Promise((resolve, reject) => setTimeout(() => reject(), 2000));
  const todos = await db.todo.findMany({});
  // console.log("todos :", todos);
  return todos;
};

const TodosPage = async () => {
  const todos = await getTodos();
  // console.log(todos);
  return (
    <section>
      <TodoList todos={todos} />
    </section>
  );
};

export default TodosPage;
