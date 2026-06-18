import { useState } from "react";

function AddStudent({ onAddStudent }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [major, setMajor] = useState("");

  const handleAdd = () => {
    if (!name.trim() || !age || !major.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      age: Number(age),
      major: major.trim(),
    };

    onAddStudent(newStudent);

    setName("");
    setAge("");
    setMajor("");
  };

  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "20px" }}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter student name"
        />
      </div>

      <div>
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter student age"
          min="1"
        />
      </div>

      <div>
        <label>Major:</label>
        <input
          type="text"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          placeholder="Enter student major"
        />
      </div>

      <button onClick={handleAdd}>Add Student</button>
    </div>
  );
}

export default AddStudent;
