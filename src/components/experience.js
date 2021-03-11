import "../styles/experience.css";
import { useState } from "react";
import uniqid from "uniqid";

const Experience = (props) => {
  const [addStatusOn, setAddStatusOn] = useState(false);

  const [data, setData] = useState([]);

  const [input, setInput] = useState({
    id: uniqid(),
    title: "",
    company: "",
    location: "",
    dates: "",
    responsibilities: "",
    expEditModeOn: false,
  });

  const addExperience = (e) => {
    e.preventDefault();
    setAddStatusOn(true);
  };

  const saveExperience = (e) => {
    e.preventDefault();
    const joined = data.concat(input);
    setData(joined);
    setInput({
      id: uniqid(),
      title: "",
      company: "",
      location: "",
      dates: "",
      responsibilities: "",
    });
    setAddStatusOn(false);
  };

  const cancelSaveExperience = (e) => {
    e.preventDefault();
    setInput({
      id: uniqid(),
      title: "",
      company: "",
      location: "",
      dates: "",
      responsibilities: "",
    });
    setAddStatusOn(false);
  };

  const titleChange = (e) => {
    setInput((prevState) => {
      return {
        ...prevState,
        title: `${e.target.value}`,
      };
    });
  };

  const datesChange = (e) => {
    setInput((prevState) => {
      return {
        ...prevState,
        dates: `${e.target.value}`,
      };
    });
  };

  const companyChange = (e) => {
    setInput((prevState) => {
      return {
        ...prevState,
        company: `${e.target.value}`,
      };
    });
  };

  const locationChange = (e) => {
    setInput((prevState) => {
      return {
        ...prevState,
        location: `${e.target.value}`,
      };
    });
  };

  const responsibilitiesChange = (e) => {
    setInput((prevState) => {
      return {
        ...prevState,
        responsibilities: `${e.target.value}`,
      };
    });
  };

  const deleteExperience = (e) => {
    e.preventDefault();
    setData((prevState) => {
      const newState = prevState.filter(
        (exp) => exp.id !== e.target.parentNode.parentNode.id
      );
      return newState;
    });
  };

  const editExperience = (e) => {
    e.preventDefault();
    console.log(e.target.parentNode.parentNode);
    console.log(e.target.parentNode.parentNode.id);
  };

  return (
    <div className="experience">
      <div className="title">WORK EXPERIENCE</div>
      {data.map((experience) => {
        return (
          <div key={experience.id} id={experience.id}>
            <div className="titleDatesContainer">
              <div id="title">{experience.title}</div>
              <div id="dates">{experience.dates}</div>
            </div>
            <div className="companyLocationContainer">
              <div id="company">{experience.company}</div>
              <div id="location">{experience.location}</div>
            </div>
            <div id="responsibilities">{experience.responsibilities}</div>
            <div className="buttonContainer">
              {props.statusData.editModeOn && (
                <>
                  <button onClick={editExperience}>Edit</button>
                  <button onClick={deleteExperience}>Delete</button>
                </>
              )}
            </div>
            <br></br>
          </div>
        );
      })}
      {addStatusOn && (
        <div>
          <input id="title" placeholder="Title" onChange={titleChange} />
          <input
            id="dates"
            placeholder="Start to end date"
            onChange={datesChange}
          />
          <input id="company" placeholder="Company" onChange={companyChange} />
          <input
            id="location"
            placeholder="Location"
            onChange={locationChange}
          />
          <input
            id="responsibilities"
            placeholder="Responsibilities"
            onChange={responsibilitiesChange}
          />
          <button onClick={saveExperience}>Save</button>
          <button onClick={cancelSaveExperience}>Cancel</button>
        </div>
      )}
      {props.statusData.editModeOn === true && addStatusOn === false && (
        <button onClick={addExperience}>Add experience</button>
      )}
      {/*       <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(input);
          }}
        >
          Input log
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(data);
          }}
        >
          Data log
        </button>
      </div> */}
    </div>
  );
};

export default Experience;
