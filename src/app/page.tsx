import { getTodos } from "@/api/data";
import TodoItem from "@/components/TodoItem";
import Link from "next/link";

export default async function Home() {
  // await addDummyTodo();
  const todos = await getTodos();

  return (
    <>
      <div className="flex justify-between">
        <header className="text-2xl text-gray-50">Todos</header>
        <Link href={`/add-todo`} className="p-2 border-2 border-white">Add todo</Link>
      </div>
      <ul>
        {todos.map((todo) => <TodoItem key={todo.id} {...todo}/>)}
      </ul>
    </>
  );
}
