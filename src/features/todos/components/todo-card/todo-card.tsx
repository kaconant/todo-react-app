import styles from "./todo-card.module.css";

interface ToDoCardProps {
  id: string;
  title: string;
  completed: boolean;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const ToDoCard: React.FC<ToDoCardProps> = ({
  id,
  title,
  completed,
  onComplete,
  onDelete,
}) => {
  return (
    <div
      className={`${styles.card} ${completed ? styles.completed : ""}`}
      role="listitem"
    >
      <p className={`${styles.title} ${completed ? styles.completed : ""}`}>
        {title}
      </p>
      <div className={styles.actions}>
        <button
          className={styles.toggle}
          onClick={() => onComplete(id)}
          aria-pressed={completed}
          aria-label={
            completed ? "Mark task as incomplete" : "Mark task as complete"
          }
        >
          {completed ? "Reopen" : "Complete"}
        </button>
        <button
          className={styles.delete}
          onClick={() => onDelete(id)}
          aria-label="Delete task"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoCard;
