import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalStorage";

export const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoData());

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    //to check if the input field is empty or not
    if (!content) return;

    // to check if the data is already existing or not
    // if (task.includes(inputValue)) return;
    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  //todo add data to localStorage
  setLocalStorageTodoData(task);

  //todo handleDeleteTodo function
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };

  //todo handleClearTodoData functionality
  const handleClearTodoData = () => {
    setTask([]);
  };

  //todo handleCheckedTodo functionality
  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                checked={curTask.checked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckedTodo={handleCheckedTodo}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear all
        </button>
      </section>
    </section>
  );
};














// import {useState} from "react";
// import "./Todo.css";
// // import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// // import { MdDeleteForever } from "react-icons/md";
// import { TodoForm } from "./TodoForm";
// import { TodoList } from "./TodoList";
// import { TodoDate } from "./TodoDate";


// export const Todo =() =>{
//     // const [inputValue,setInputValue] =useState("");
    
//    const [task,setTask] =useState();
// //    const [dateTime , setDateTime] = useState("");
   
// //    const handleInputChange =(value) =>{
// //         setInputValue(value);
// //     }
     

//   const handleFormSubmit =(inputValue) =>{
//     const {id ,content,checked} =inputValue;
  
//     // to check if field is empty or not
//     if (!content) return;

//     // to check if data id already existing or not
//     // if(task.includes(inputValue))  return  ;
//     const ifTodoContentMatched=task.find(
//         (curTask) => curTask.content ===content
//     );
//     if(ifTodoContentMatched) return;

//     setTask((prevTask) => [...prevTask,{id:id , content:content ,checked:checked}]);
    
//     // setInputValue("");
// };

//  console.log("Due to chance of memory leaks,we used useEffect. ");
 
// // TODO DATE & TIME

 
//     // todo handleDeleteTodo functionality

//     const handleDeleteTodo = (value ) =>{
//         console.log(task);
//         console.log(value);

//     const updatedTask = task.filter((curTask) =>curTask.content !== value );
//         setTask(updatedTask);
//     };
    
//     //  todo handleClearTodo functionality
//         const handleClearTodoData = (value ) =>{
//         setTask("[]");

//     }
//     // todo HandleCheckedTodo functionality 

// const handleCheckedTodo=(content) =>{
//     const updatedTask = task.map((curTask) =>
//     {
//         if(curTask.content === content){
//             return{...curTask,checked:!curTask.checked};
//         } else{
//             return curTask;
//         }
//     }
// );
// setTask(updatedTask);
// };
//     return (
//     <section className="todo-container">
//         <header>
//             <h1>TODO LIST</h1>
//             {/* DATE */}
//             <TodoDate />;
          
//         </header>
        
//         < TodoForm  onAddTodo ={handleFormSubmit}/>

//         <section className="myUnOrdList">
//             <ul>
//                 {task.map((curTask) => {
//                     return ( 
//                         <TodoList key={curTask.id} 
//                         data={curTask.content}
//                         checked={curTask.checked}
//                         onHandleDeleteTodo ={handleDeleteTodo}
//                     onHandleCheckedTodo ={handleCheckedTodo}
//                         />
                    
//                     );
//                     }
//                 )
//                 }
//             </ul>
//         </section>
//         <section>
//             <button className="clear-btn" onClick  = {handleClearTodoData}>Clear All</button>
//         </section>
//     </section>
//     );
// };

