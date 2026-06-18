import { useState, useMemo } from "react";
import DeleteStudent from "./DeleteStudent";
import UpdateStudent from "./UpdateStudent";

const MAJORS = [
    "All Major",
    "Information Technology",
    "Business Administration",
    "Marketing",
    "Software Engineering",
];

function FilterStudentByMajor({ studentList, onEditStart, onDelete }) {
    const [selectedMajor, setSelectedMajor] = useState("All Major");

    const filteredList = useMemo(() => {
        if (selectedMajor === "All Major") return studentList;
        return studentList.filter(
            (student) =>
                student.major.toLowerCase() === selectedMajor.toLowerCase()
        );
    }, [studentList, selectedMajor]);

    return (
        <div>
            <h2>Filter by Major</h2>
            <div>
                <label>Major: </label>
                <select
                    value={selectedMajor}
                    onChange={(e) => setSelectedMajor(e.target.value)}
                >
                    {MAJORS.map((major) => (
                        <option key={major} value={major}>
                            {major}
                        </option>
                    ))}
                </select>
            </div>

            <table border="1" cellPadding="8" cellSpacing="0" style={{ marginTop: "8px" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Major</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredList.length > 0 ? (
                        filteredList.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.major}</td>
                                <td>
                                    <UpdateStudent student={student} onEditStart={onEditStart} />
                                    <DeleteStudent student={student} onDelete={onDelete} />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" style={{ textAlign: "center" }}>
                                No students found for this major.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default FilterStudentByMajor;
