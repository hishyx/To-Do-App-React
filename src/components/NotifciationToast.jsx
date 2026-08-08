function NotificationToast({ content = "Hello world", onClose }) {
  return (
    <div
      className="toast-entry"
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",

        minWidth: "200px",
        padding: "14px 20px",

        backgroundColor: "#3a1f1f",
        color: "#ff6b6b",
        border: "1px solid #6b2d2d",
        fontFamily: "Inter, sans-serif",

        borderRadius: "8px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
        zIndex: 2000,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",

        textAlign: "center",
      }}
    >
      <span>{content}</span>

      <button
        onClick={onClose}
        style={{
          border: "none",
          background: "transparent",
          color: "#ff6b6b",
          fontSize: "20px",
          fontWeight: "bold",
          cursor: "pointer",
          padding: "0",
          lineHeight: "1",
        }}
      >
        ×
      </button>
    </div>
  );
}

export default NotificationToast;
