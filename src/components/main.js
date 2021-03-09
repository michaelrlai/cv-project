import "../styles/main.css";
import General from "./general";
import Education from "./education";
import Experience from "./experience";
import Button from "./button";

const Main = (props) => {
  return (
    <main className="main">
      <form>
        <General
          statusData={props.statusData}
          statusFunctions={props.statusFunctions}
        />
        <Experience
          statusData={props.statusData}
          statusFunctions={props.statusFunctions}
        />
        <Education
          statusData={props.statusData}
          statusFunctions={props.statusFunctions}
        />
        <Button
          statusData={props.statusData}
          statusFunctions={props.statusFunctions}
        />
      </form>
    </main>
  );
};

export default Main;
