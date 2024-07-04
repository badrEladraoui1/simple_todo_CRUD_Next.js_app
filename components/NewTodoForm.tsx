import React, { useState } from "react";

import { newTodo } from "@/utils/actions";

const NewTodoForm = () => {
  return (
    <section>
      <form action={newTodo} className="flex gap-5">
        <input
          name="content"
          className="p-3 rounded-md font-bold text-gray-500"
          type="text"
          placeholder="todo"
        />
        <button
          type="submit"
          className="p-2 bg-white text-black font-bold rounded-md"
        >
          Add
        </button>
      </form>
    </section>
  );
};

export default NewTodoForm;
