"use client"

import { useState } from "react";
import { deleteTodo } from "@/api/data"

type TodoItemProp = {
    id: string,
    title: string,
    complete: boolean
}

export default function TodoItem ({id, title, complete}: TodoItemProp) {
    const [isChecked, setIsChecked] = useState<boolean>(complete);

    const updateStatus = (id: string, value: boolean) => {
        setIsChecked(value);
        deleteTodo(id, value);
    }

    return (
        <li className="flex gap-1 items-center">
            <input id={id} type="checkbox" checked={isChecked} className="cursor-pointer peer" onChange={e => updateStatus(id, e.target.checked)}/>
            <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-gray-500">
                {title}
            </label>
        </li>
    )
}