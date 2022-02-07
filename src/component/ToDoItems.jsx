function ToDoItems({ item, id, onDelete }) {
    return (
      <div
        onClick={() => {
          return onDelete(id);
        }}
      >
        <li>{item}</li>
      </div>
    );
  }
  export default ToDoItems;