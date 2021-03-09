import "../styles/button.css";

const Button = (props) => {
  return <button onClick={props.statusFunctions.editMode}>Save</button>;
};

export default Button;
