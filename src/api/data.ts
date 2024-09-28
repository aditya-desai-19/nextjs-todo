"use server"

import { redirect } from "next/navigation";
import { prisma } from "./db"

type deleteTodoType = {
    id: string,
    isChecked: boolean
}

export const addDummyTodo = async () => {
    await prisma.todo.create({ data: { title: "Code", complete: false}});
}

export const getTodos = async () => {
    return await prisma.todo.findMany();
}

export const addTodo = async (data: FormData) => {
    const title = data.get("title")?.valueOf();
    if(typeof title != "string" || title.length == 0) {
        throw new Error("Invalid todo");
    }

    await prisma.todo.create({ data: { title, complete: false}});
    redirect("/");
}

export const deleteTodo = async (id: string, isChecked: boolean) => {
    await prisma.todo.update({ where: {id}, data: { complete: isChecked}});
}