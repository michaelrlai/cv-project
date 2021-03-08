import "../styles/main.css";
import General from "./general";
import Education from "./education";
import Experience from "./experience";
import Button from "./button";

const Main = (props) => {
  return (
    <main className="main">
      <form>
        <General data={props.data} functions={props.functions} />
        <Experience />
        <Education />
        <Button functions={props.functions} />
      </form>
    </main>
  );
};

export default Main;
