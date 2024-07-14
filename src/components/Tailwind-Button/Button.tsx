import { ButtonProps } from "./Button.types";


const Button: React.FC<ButtonProps> = ({
  title, 
  icon, 
  onClick 
  
}) => {
  return (
         <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-red-700"
    >
      {icon && <span>{icon}</span>}
      <span>{title}</span>
    </button>
  );
};

export default (Button);