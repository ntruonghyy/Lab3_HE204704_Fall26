function DeleteStudent({ student, onDelete }) {
    const handleDelete = () => {
        onDelete(student.id);
    };

    return (
        <button onClick={handleDelete}>Delete</button>
    );
}

export default DeleteStudent;
