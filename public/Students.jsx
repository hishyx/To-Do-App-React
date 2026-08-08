import StudentCard from "./Card";
import { useState } from "react";

const studentsArray = [
  { id: 1, name: "Liam", present: false },
  { id: 2, name: "Noah", present: true },
  { id: 3, name: "Oliver", present: false },
  { id: 4, name: "James", present: true },
  { id: 5, name: "Lucas", present: false },
];

function StudentList() {
  const [students, setStudents] = useState(studentsArray);

  //Toggle attendance

  function onToggle(id) {
    console.log("Hello bro");
    setStudents(
      students.map((student) =>
        student.id !== id ? student : { ...student, present: !student.present },
      ),
    );
  }

  //Delete student

  function onDelete(id) {
    setStudents(students.filter((student) => student.id !== id));
  }

  return (
    <div>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default StudentList;
