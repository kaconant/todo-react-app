import styles from "./todo-card.module.css";

interface ToDoCardProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const ToDoCard: React.FC<ToDoCardProps> = ({
  id,
  text,
  completed,
  onToggle,
  onDelete,
}) => {
  return (
    <div
      className={`${styles.card} ${completed ? styles.completed : ""}`}
      role="listitem"
    >
      <p className={styles.text}>{text}</p>
      <div className={styles.actions}>
        <button
          className={styles.toggle}
          onClick={() => onToggle(id)}
          aria-pressed={completed}
          aria-label={
            completed ? "Mark task as incomplete" : "Mark task as complete"
          }
        >
          {completed ? "Undo" : "Complete"}
        </button>
        <button
          className={styles.delete}
          onClick={() => onDelete(id)}
          aria-label="Delete task"
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default ToDoCard;
