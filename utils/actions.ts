"use server";

import { revalidatePath } from "next/cache";
import db from "./db";

import { todoCompletionState } from "./helpers";

import { redirect } from "next/navigation";

// solution 1

// export const newTodo = async (formData: FormData) => {
//   const todo = await db.todo.create({
//     data: {
//       content: formData.get("content") as string,
//     },
//   });
// };

// solution 2

export const newTodo = async (formData: FormData) => {
  const content = formData.get("content");
  if (typeof content === "string") {
    const todo = await db.todo.create({
      data: {
        content,
      },
    });
    revalidatePath("/todos");
  } else {
    throw new Error("Invalid form data");
  }
};

export const completeTodo = async (id: string) => {
  //   await db.todo.update({
  //     where: { id },
  //     data: {
  //       completed: true,
  //     },
  //   });
  //   revalidatePath("/todos");
  await todoCompletionState(id, true, "/todos");
};

export const resetTodo = async (id: string) => {
  //   await db.todo.update({
  //     where: { id },
  //     data: {
  //       completed: false,
  //     },
  await todoCompletionState(id, false, "/todos");
};
