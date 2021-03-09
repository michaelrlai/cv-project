import "../styles/general.css";
import { useState } from "react";

const General = (props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  const nameChange = (e) => {
    setData((prevState) => {
      return {
        ...prevState,
        name: `${e.target.value}`,
      };
    });
  };

  const emailChange = (e) => {
    setData((prevState) => {
      return {
        ...prevState,
        email: `${e.target.value}`,
      };
    });
  };

  const phoneChange = (e) => {
    setData((prevState) => {
      return {
        ...prevState,
        phone: `${e.target.value}`,
      };
    });
  };

  const locationChange = (e) => {
    setData((prevState) => {
      return {
        ...prevState,
        location: `${e.target.value}`,
      };
    });
  };

  if (props.statusData.editModeOn === true) {
    return (
      <div className="general">
        <input
          id="name"
          placeholder="Name"
          onChange={nameChange}
          value={data.name}
        />
        <input
          id="email"
          placeholder="Email"
          onChange={emailChange}
          value={data.email}
        />
        <input
          id="phone"
          placeholder="Phone"
          onChange={phoneChange}
          value={data.phone}
        />
        <input
          id="location"
          placeholder="City, State"
          onChange={locationChange}
          value={data.location}
        />
      </div>
    );
  } else {
    return (
      <div className="general">
        <div id="name">{data.name}</div>
        <div id="email">{data.email}</div>
        <div id="phone">{data.phone}</div>
        <div id="location">{data.location}</div>
      </div>
    );
  }
};

export default General;
