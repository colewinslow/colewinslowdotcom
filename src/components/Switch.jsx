import { Moon, Sun } from "react-bootstrap-icons";

function Switch({ isOn, handleToggle }) {
  return (
    <div className="switch" onClick={handleToggle}>
      {isOn ? <Moon size={20} /> : <Sun size={20} />}
    </div>
  );
}
export default Switch;
