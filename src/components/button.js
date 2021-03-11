import "../styles/button.css";

const Button = (props) => {
  return (
    <div>
      {props.statusData.editModeOn ? (
        <button onClick={props.statusFunctions.editMode}>Save CV</button>
      ) : (
        <button onClick={props.statusFunctions.editMode}>Edit CV</button>
      )}
    </div>
  );
};

export default Button;
