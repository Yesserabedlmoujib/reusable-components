import { ButtonProps } from "./Button.types";
import "./Button.styles.css";

const CsButton: React.FC<ButtonProps> = ({
  title,
  icon,
  onClick,
  variant = "primary",
}) => {
  return (
    <button
      className={`button ${variant === "primary" ? "primary" : "secondary"}`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      <span>{title}</span>
    </button>
  );
};

export default CsButton;
