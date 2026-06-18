function UpdateStudent({ student, onEditStart }) {
    return (
        <button onClick={() => onEditStart(student)}>Edit</button>
    );
}

export default UpdateStudent;
