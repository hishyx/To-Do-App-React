import { useState } from "react";

function NoteModal({ closeModal, onTaskSave, task }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [content, setContent] = useState(task ? task.content : "");
  const [dueDate, setDueDate] = useState(task ? task.dueDate : "");

  function addTask() {
    const id = crypto.randomUUID();

    if (title.length && content.length && dueDate) {
      const isEdit = task ? true : false;

      onTaskSave(
        {
          id: task ? task.id : id,
          title,
          content,
          completed: task ? task.completed : false,
          dueDate,
          updatedAt: new Date(),
        },
        isEdit,
      );
    }

    closeModal();
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.65)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "500px",
          backgroundColor: "#1e1e1e",
          borderRadius: "12px",
          padding: "24px",
          color: "white",
          boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <h2 style={{ margin: 0 }}>{task ? "Edit Task" : "New Task"}</h2>

        {/* Title */}
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #444",
            backgroundColor: "#2a2a2a",
            color: "white",
            outline: "none",
            fontSize: "16px",
          }}
        />

        {/* Content */}
        <textarea
          rows={6}
          placeholder="Describe your task..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #444",
            backgroundColor: "#2a2a2a",
            color: "white",
            outline: "none",
            resize: "vertical",
            lineHeight: "1.5",
            fontSize: "15px",
          }}
        />

        {/* Due Date */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <label
            style={{
              fontSize: "14px",
              color: "#d0d0d0",
            }}
          >
            Due Date
          </label>

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #444",
              backgroundColor: "#2a2a2a",
              color: "white",
              outline: "none",
              fontSize: "15px",
            }}
          />
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px 16px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#555",
              color: "white",
              cursor: "pointer",
            }}
            onClick={closeModal}
          >
            Cancel
          </button>

          <button
            style={{
              padding: "10px 16px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#4CAF50",
              color: "white",
              cursor: "pointer",
            }}
            onClick={addTask}
          >
            {task ? "Edit Task" : "Add Task"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteModal;
