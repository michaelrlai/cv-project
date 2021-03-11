import "../styles/button.css";

const Button = (props) => {
  return (
    <div>
      {props.statusData.editModeOn ? (
        <button onClick={props.statusFunctions.editMode}>Save</button>
      ) : (
        <button onClick={props.statusFunctions.editMode}>Edit</button>
      )}
    </div>
  );
};

export default Button;
