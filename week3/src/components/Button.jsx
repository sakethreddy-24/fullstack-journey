function Button({ children, onClick, variant = "primary", disabled = false, fullWidth = false }) {
  const styles = {
    primary:   { background: "#6366f1", color: "white"   },
    secondary: { background: "#e5e7eb", color: "#374151" },
    danger:    { background: "#ef4444", color: "white"   },
    success:   { background: "#10b981", color: "white"   },
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...styles[variant],
        padding: "10px 20px",
        borderRadius: "8px",
        border: "none",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        width: fullWidth ? "100%" : "auto",
        fontWeight: "600",
        fontSize: "14px",
        margin: "4px",
      }}
    >
      {children}
    </button>
  );
}

export default Button;