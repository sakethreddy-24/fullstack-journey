function Card({ title, description, color }) {
  return (
    <div style={{
      background: "white",
      borderRadius: "12px",
      padding: "20px",
      marginBottom: "16px",
      borderLeft: `4px solid ${color || "#6366f1"}`,
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
    }}>
        <h2 style={{ color: color || "#6366f1", marginBottom: "8px" }}>
        {title}
      </h2>
      <p style={{ color: "#6b7280" }}>{description}</p>
    </div>
  );
}

export default Card;
    