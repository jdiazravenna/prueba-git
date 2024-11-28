import ToDoItem from "./ToDoItem"

const TodoList = ({ todos, onCompleted, onRemoveTodo }) => {
    return (
      <ul className="flex flex-col gap-2">
        {todos.map(todo => {
          return (
            <ToDoItem
             key={todo.id}
             todo={todo}
             onCompleted={onCompleted}
             onRemoveTodo={onRemoveTodo}/>
          )
        })}
      </ul>
    )
  }
  
  export default TodoList