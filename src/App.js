import "./styles/App.css";
import Main from "./components/main";
import React, { useState } from "react";

const App = () => {
  let [statusData, setStatusData] = useState({
    editModeOn: true,
  });

  const statusFunctions = {
    editMode: (e) => {
      e.preventDefault();
      if (statusData.editModeOn === true) {
        setStatusData((prevState) => {
          return {
            ...prevState,
            editModeOn: false,
          };
        });
      } else {
        setStatusData((prevState) => {
          return {
            ...prevState,
            editModeOn: true,
          };
        });
      }
      console.log(statusData);
    },
  };

  return (
    <div className="App">
      <Main statusData={statusData} statusFunctions={statusFunctions} />
    </div>
  );
};

export default App;
