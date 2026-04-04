function Badge({ text, type }) {
  const colors = {
    success: { bg: "#dcfce7", color: "#16a34a" },
    warning: { bg: "#fef9c3", color: "#ca8a04" },
    error:   { bg: "#fee2e2", color: "#dc2626" },
    info:    { bg: "#dbeafe", color: "#2563eb" },
  };

  const style = colors[type] || colors.info;

  return (
    <span style={{
      background: style.bg,
      color: style.color,
      padding: "2px 10px",
      borderRadius: "999px",
      fontSize: "12px",
      fontWeight: "600",
    }}>
      {text}
    </span>
  );
}

export default Badge;