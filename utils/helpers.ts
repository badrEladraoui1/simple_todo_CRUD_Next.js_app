import { revalidatePath } from "next/cache";
import db from "./db";

export const todoCompletionState = async (
  id: string,
  state: boolean,
  path: string
) => {
  await db.todo.update({
    where: { id },
    data: {
      completed: state,
    },
  });
  revalidatePath(path);
};
