import { ReactNode } from "react";

//Using the children as prop - it is a special prop and supported by all components
//Whatever will be the children as string, number, HTML content, etc of Alert in App.tsx will be passed as prop of Alert, it could be HTML element as well
interface AlertProps {
  children?: ReactNode; //string;
  onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
