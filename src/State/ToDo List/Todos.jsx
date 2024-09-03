// To do list requirement:
// 1. A input box to enter to do
// - If the box is emapty then type "enter text" or display a toast message
// 2. A list which print the entered To do
// - Add edit/delet button
// - Add reactions emoji

import { useState } from "react";
import EmojiPicker from "emoji-picker-react";

// import { Bounce, ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

/**
 * Phase 1 - Implement a form to accept todo from user
 */

const Todos = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [emoji, setEmoji] = useState("");
  const [picker, setPicker] = useState("");

  const onAddTodo = () => {
    if (!todoTitle) {
      //   toast.error("Please enter a todo title", {
      //     position: "top-right",
      //     autoClose: 3000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "dark",
      //     transition: Bounce,
      //   });

      alert("Enter your todo");
      return;
    }

    setTodoList((prevState) => [...prevState, todoTitle]);
    setTodoTitle("");
  };

  // add emoji
  const addEmoji = (e) => {
    setEmoji(e.emoji);
  };

  //UI
  console.log("Re-Render: ", todoTitle, todoList);
  return (
    <div>
      <div>
        <p>New Todo Title</p>
        <input
          type="text"
          value={todoTitle}
          placeholder="Enter your new todo title here."
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button onClick={onAddTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        <h1>My Todos</h1>
        <hr />
        {todoList?.length > 0 ? (
          <ul>
            {todoList.map((item, index) => {
              return (
                <li key={index}>
                  <div>
                    <span>{item} </span>

                    <span>
                      <button onClick={() => setPicker(!picker)}>
                        {emoji ? emoji : "Add Emoji"}
                      </button>

                      {picker && (
                        <div>
                          <EmojiPicker onEmojiClick={addEmoji} />
                        </div>
                      )}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No todo available</p>
        )}
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Todos;
