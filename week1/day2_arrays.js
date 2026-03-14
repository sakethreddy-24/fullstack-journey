const students = [
  { name: "Saketh", marks: 88 },
  { name: "Ravi",   marks: 45 },
  { name: "Priya",  marks: 92 },
  { name: "Arjun",  marks: 37 },
  { name: "Sneha",  marks: 76 },
];

const gmarks = students.filter((student) => student.marks>=50);
console.log(gmarks);

const Name = students.map((student) => student.name);
console.log(Name);

const firstBig = students.find((student) => student.marks > 90);
console.log(firstBig);

const classAvg = students.reduce((total, student) => total+ student.marks,0)/students.length;
console.log(classAvg);