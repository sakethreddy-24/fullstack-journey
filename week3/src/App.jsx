import StudentCard from "./components/StudentCard";
import Button from "./components/Button";

const students = [
  { id: 1, name: "Saketh", branch: "CSE AI&ML", cgpa: 8.9 },
  { id: 2, name: "Ravi",   branch: "CSE",       cgpa: 7.2 },
  { id: 3, name: "Priya",  branch: "ECE",        cgpa: 9.4 },
  { id: 4, name: "Arjun",  branch: "MECH",       cgpa: 5.8 },
];

function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "40px auto" }}>
      <h1 style={{ marginBottom: "8px" }}>Student Dashboard</h1>
      <p style={{ color: "#6b7280", marginBottom: "24px" }}>
        {students.length} students enrolled
      </p>

      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          branch={student.branch}
          cgpa={student.cgpa}
        />
      ))}

      <div style={{ marginTop: "24px" }}>
        <Button onClick={() => alert("Primary!")}>Primary Button</Button>
        <Button variant="secondary" onClick={() => alert("Secondary!")}>Secondary</Button>
        <Button variant="danger" onClick={() => alert("Danger!")}>Delete</Button>
        <Button variant="success" onClick={() => alert("Success!")}>Confirm</Button>
        <Button disabled>Disabled</Button>
        <br /><br />
        <Button variant="primary" fullWidth onClick={() => alert("Full width!")}>
          Full Width Button
        </Button>
      </div>
    </div>
  );
}

export default App;