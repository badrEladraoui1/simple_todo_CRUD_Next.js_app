import { NextResponse } from "next/server";
import db from "@/utils/db";
import { todo } from "node:test";

export const GET = async (request: Request) => {
  const todos = await db.todo.findMany({});
  return NextResponse.json({ data: todos });
};

export const POST = async (request: Request) => {
  const todoData = await request.json();
  const todoToCreate = await db.todo.create({
    data: todoData,
  });
  return NextResponse.json({ message: todoToCreate });
};
