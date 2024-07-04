import NewTodoForm from "@/components/NewTodoForm";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col items-center m-10 gap-5">
      <h1 className="text-2xl font-bold">WELCOME to the Todos Page !!!</h1>
      <NewTodoForm />
      <div>{children}</div>
    </section>
  );
};

export default layout;
