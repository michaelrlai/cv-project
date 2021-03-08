import "../styles/general.css";

const General = (props) => {
  if (props.data.editModeOn === true) {
    return (
      <div className="general">
        <input
          id="name"
          placeholder="Name"
          onChange={props.functions.nameChange}
          value={props.data.name}
        />
        <input
          id="email"
          placeholder="Email"
          onChange={props.functions.emailChange}
          value={props.data.email}
        />
        <input
          id="phone"
          placeholder="Phone"
          onChange={props.functions.phoneChange}
          value={props.data.phone}
        />
        <input
          id="location"
          placeholder="City, State"
          onChange={props.functions.locationChange}
          value={props.data.location}
        />
      </div>
    );
  } else {
    return (
      <div className="general">
        <div id="name">{props.data.name}</div>
        <div id="email">{props.data.email}</div>
        <div id="phone">{props.data.phone}</div>
        <div id="location">{props.data.location}</div>
      </div>
    );
  }
};

export default General;
