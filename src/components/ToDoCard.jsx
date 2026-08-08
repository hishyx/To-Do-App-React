function ToDoCard({ task, onEditClick, onDelete, onCheck }) {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "180px",
        padding: "20px",
        margin: "15px auto",
        borderRadius: "12px",
        backgroundColor: "#1e1e1e",
        color: "white",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        boxSizing: "border-box",
      }}
    >
      {/* Task Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onCheck(task.id)}
          style={{
            width: "20px",
            height: "20px",
            cursor: "pointer",
          }}
        />

        <h2
          style={{
            margin: 0,
            fontSize: "1.3rem",
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "#888" : "white",
          }}
        >
          {task.title}
        </h2>
      </div>

      {/* Task Description */}
      {task.content && (
        <p
          style={{
            margin: "0 0 0 32px",
            color: "#d0d0d0",
            lineHeight: "1.5",
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          {task.content}
        </p>
      )}

      {/* Due Date */}
      {task.dueDate && (
        <small
          style={{
            marginLeft: "32px",
            color: task.completed ? "#888" : "#FFC107",
            fontSize: "0.9rem",
          }}
        >
          📅 Due: {task.dueDate}
        </small>
      )}

      {/* Task Status */}
      <small
        style={{
          marginLeft: "32px",
          color: task.completed ? "#4CAF50" : "#FFC107",
        }}
      >
        {task.completed ? "✓ Completed" : "○ Pending"}
      </small>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
          marginTop: "auto",
        }}
      >
        <button
          onClick={() => onEditClick(task.id)}
          style={{
            padding: "8px 14px",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#2196F3",
            color: "white",
            cursor: "pointer",
          }}
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(task.id)}
          style={{
            padding: "8px 14px",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#F44336",
            color: "white",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoCard;
