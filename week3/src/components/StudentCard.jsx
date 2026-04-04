import Badge from "./Badge";

function StudentCard({ name, branch, cgpa }) {
  const getGrade = (cgpa) => {
    if (cgpa >= 9)   return { text: "Outstanding", type: "success" };
    if (cgpa >= 7.5) return { text: "Excellent",   type: "info"    };
    if (cgpa >= 6)   return { text: "Good",        type: "warning" };
    return                  { text: "Average",     type: "error"   };
  };

  const grade = getGrade(cgpa);

  return (
    <div style={{
      background: "white",
      borderRadius: "12px",
      padding: "20px",
      marginBottom: "12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}>
      <div>
        <h3 style={{ marginBottom: "4px" }}>{name}</h3>
        <p style={{ color: "#6b7280", fontSize: "14px" }}>{branch}</p>
      </div>
      <div style={{ textAlign: "right" }}>
        <p style={{ fontWeight: "700", fontSize: "20px", marginBottom: "6px" }}>
          {cgpa}
        </p>
        <Badge text={grade.text} type={grade.type} />
      </div>
    </div>
  );
}

export default StudentCard;