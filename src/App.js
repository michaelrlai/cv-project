import "./styles/App.css";
import Main from "./components/main";
import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    editModeOn: true,
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  const functions = {
    editMode: (e) => {
      e.preventDefault();
      if (data.editModeOn === true) {
        setData((prevState) => {
          return {
            ...prevState,
            editModeOn: false,
          };
        });
      } else {
        setData((prevState) => {
          return {
            ...prevState,
            editModeOn: true,
          };
        });
      }
      console.log(data);
      console.log(data.editModeOn);
    },
    nameChange: (e) => {
      setData((prevState) => {
        return {
          ...prevState,
          name: `${e.target.value}`,
        };
      });
    },
    emailChange: (e) => {
      setData((prevState) => {
        return {
          ...prevState,
          email: `${e.target.value}`,
        };
      });
    },
    phoneChange: (e) => {
      setData((prevState) => {
        return {
          ...prevState,
          phone: `${e.target.value}`,
        };
      });
    },
    locationChange: (e) => {
      setData((prevState) => {
        return {
          ...prevState,
          location: `${e.target.value}`,
        };
      });
    },
  };

  return (
    <div className="App">
      <Main data={data} functions={functions} />
    </div>
  );
};

export default App;
