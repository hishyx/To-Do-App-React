import NotificationToast from "./NotifciationToast";

function Navbar({ openModal, notify, onNotificationClose }) {
  return (
    <nav
      style={{
        width: "100%",
        padding: "18px 24px",
        backgroundColor: "#1e1e1e",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        margin: "15px auto",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: "1.5rem",
          fontWeight: "600",
        }}
      >
        ✅ To-Do List
      </h1>

      <div
        style={{
          display: "flex",
          gap: "12px",
        }}
      >
        {notify && (
          <NotificationToast content={notify} onClose={onNotificationClose} />
        )}
        <button
          style={{
            padding: "8px 14px",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#2196F3",
            color: "white",
            cursor: "pointer",
          }}
        >
          All Tasks
        </button>

        <button
          style={{
            padding: "8px 14px",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#4CAF50",
            color: "white",
            cursor: "pointer",
          }}
          onClick={openModal}
        >
          + Add Task
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
