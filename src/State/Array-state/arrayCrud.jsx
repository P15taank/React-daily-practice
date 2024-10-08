import { useState } from "react";
import { v4 } from "uuid";
import { toast } from "react-toastify";

const ArrayCrudTodo = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });
  const [todoErr, setTodoErr] = useState({
    title: false,
    description: false,
  });

  const onTodoInputChange = (e) => {
    const { name, value } = e.target;
    // setTodo((prev) => {
    //   return {
    //     ...prev,
    //     [name]: value,
    //   };
    // });

    setTodo((prev) => ({ ...prev, [name]: value }));
  };

  const onAddTodoToList = () => {
    if (todo.title === "" || todo.title.length < 3) {
      // "", null , undefined , NaN, false
      setTodoErr((prev) => ({ ...prev, title: true }));
      return toast.error("Please enter todo title of atleast 3 length");
    } else {
      setTodoErr((prev) => ({ ...prev, title: false }));
    }

    if (!todo.description) {
      setTodoErr((prev) => ({ ...prev, description: true }));
      return toast.error("Please enter todo decription");
    } else {
      setTodoErr((prev) => ({ ...prev, description: false }));
    }

    const newTodo = { ...todo, id: v4() };
    setTodoList((prev) => [...prev, newTodo]);
    setTodo({ title: "", description: "" });
    toast.success("Todo addedd successfully!");
    //setTodoErr({ title: false, description: false });

    // [...prev, { ...todo, id: v4() }]
    // ...prev = [{id:1, title:'Hello', decription:'hi'}]
    // { ...todo, id: v4() } - {title:'Hey', description:'Hello', id: v4()}
  };

  const onDeleteTodo = (id) => {
    setTodoList((prev) => {
      return prev.filter((item) => item.id !== id);
    });
    toast.success("Todo deleted successfully!");
  };

  console.log("Todo: ", todo);
  return (
    <div>
      <div className="add-todo">
        <div>
          <p>Title</p>
          <input
            name="title"
            type="text"
            value={todo.title}
            placeholder="Enter title"
            onChange={onTodoInputChange}
          />
          {todoErr.title && <p>Title is required</p>}
        </div>

        <div>
          <p>Decription</p>
          <input
            name="description"
            type="text"
            value={todo.description}
            placeholder="Enter description"
            onChange={onTodoInputChange}
          />

          {todoErr.description && <p>Decription is required</p>}
        </div>

        <button onClick={onAddTodoToList}>Add Todo</button>
      </div>
      <div>
        <h1>My Work items</h1>
        {todoList.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.title}</p>
              <p>{item.description}</p>
              <hr />
              <div>
                <button>Edit</button>
                <button onClick={() => onDeleteTodo(item.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArrayCrudTodo;
