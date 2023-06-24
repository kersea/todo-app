import { useState } from "react";
import CheckListItem from "./CheckListItem";
import toDoData from "../toDoData";
function MainContent() {
  const [toDoState, setToDoState] = useState(toDoData);
  const handleCheckboxClick = (id) => {
    const newToDoList = toDoState.map((toDo) => {
      if (toDo.id == id) {
        toDo.completed = !toDo.completed;
      }
      return toDo;
    });
    setToDoState(newToDoList);
  };
  const mappedtoDoState = toDoState.map((item) => {
    return (
      <CheckListItem
        toDoId={item.id}
        toDoMessage={item.text}
        toDoStatus={item.completed}
        handleCheckboxClick={handleCheckboxClick}
      />
    );
  });

  return <>{mappedtoDoState}</>;
}

export default MainContent;
