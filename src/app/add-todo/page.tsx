import { addTodo } from "@/api/data";
import Link from "next/link";

export default function AddTodo() {
    return (
        <>
            <header>Add todo</header>
            <form className="flex flex-col mt-2 " action={addTodo}>
                <input type="text" name="title" placeholder="Type..." className="p-2 bg-transparent text-gray-50 border-2 border-white" />
                <div className="flex gap-2 justify-end mt-2">
                    <Link href={".."} className="p-2 border-2 border-white">Go back</Link>
                    <button type="submit" className="p-2 border-2 border-white">Add</button>
                </div>
            </form>
        </>
    )
}