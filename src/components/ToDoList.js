import ToDoListItem from "../components/ToDoListItem";

const ToDoList = (props) => {
    return (
        <>
        {props.todos.map((todoItem) => (
              <ToDoListItem
                key={todoItem.id}
                todo={todoItem}
                handleCheck={props.handleCheck}
                handleDelete={props.handleDelete}
              />
            ))}
        </>
    )
}

export default ToDoList