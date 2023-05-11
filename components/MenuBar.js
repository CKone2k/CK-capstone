import { menuBarStyles, menuButtonStyles } from "../styles";

const MenuBar = ({ onCreateClick, onMainClick, onProfileClick }) => {
  return (
    <div style={menuBarStyles}>
      <button style={menuButtonStyles} onClick={onCreateClick}>
        Create
      </button>
      <button style={menuButtonStyles} onClick={onMainClick}>
        Main
      </button>
      <button style={menuButtonStyles} onClick={onProfileClick}>
        Profile
      </button>
    </div>
  );
};

export default MenuBar;
