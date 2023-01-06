import { useState } from "react";
import _ from "lodash";
import ToDoListItem from "../components/ToDoListItem";

const HomePage = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleCreate = (event) => {
    event.preventDefault();
    const todoInput = {
      id: Date.now(),
      checked: false,
      todo: todo,
    };
    setTodos([todoInput, ...todos]);
    setTodo("");
  };

  const handleCheck = (id, checked) => {
    const index = _.findIndex(todos, function (o) {
      return id === o.id;
    });
    const todosTemp = todos;
    todosTemp[index].checked = checked;
    setTodos(_.sortBy([...todosTemp], ['checked', 'id']));
  };

  const handleDelete = (id) => {
    let todosTemp = todos;
    todosTemp = _.filter(todosTemp, function (o) {
      return id !== o.id;
    });
    setTodos([...todosTemp]);
  };
  return (
    <>
      <div className="flex justify-center items-center w-full mx-auto mt-48">
        <div className="w-6/12">
            <h1 className="text-center text-6xl font-medium tracking-wide mb-4">todo</h1>
          <form onSubmit={handleCreate}>
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Create ToDo"
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
                required
                autoComplete="off"
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create
              </button>
            </div>
          </form>

          <div className="mt-12 gap-1">
            {todos.map((todoItem) => (
              <ToDoListItem
                key={todoItem.id}
                todo={todoItem}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
