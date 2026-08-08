import ToDoCard from "./ToDoCard";
import "../../public/css/main.css";
import { useState } from "react";

export function CardLayout({ tasks, onCheck, onDelete, onEditClick }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "20px",
      }}
    >
      {tasks.map((task) => (
        <ToDoCard
          key={task.id}
          task={task}
          onCheck={onCheck}
          onDelete={onDelete}
          onEditClick={onEditClick}
        />
      ))}
    </div>
  );
}

export default CardLayout;
